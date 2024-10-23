"use client";

import React, { useEffect, useState } from 'react';
import { BarChart2 } from 'lucide-react';

interface ConsumptionData {
  todayUsage: number;
  weeklyAverage: number;
  consumptionChange: number;
}

const EnergyConsumption: React.FC = () => {
  const [consumptionData, setConsumptionData] = useState<ConsumptionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchConsumptionData = async () => {
    setLoading(true);
    try {
      // Replace this with your actual API endpoint
      const response = await fetch('/api/consumption');
      if (!response.ok) {
        throw new Error('Failed to fetch consumption data');
      }
      const data = await response.json();
      setConsumptionData(data);
    } catch (error) {
      console.error(error);
      // Optionally handle errors here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConsumptionData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <BarChart2 className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Energy Consumption Analytics</h2>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading energy consumption data...</p>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="font-medium">Today's Usage:</p>
            <p className="text-2xl font-bold">{consumptionData?.todayUsage.toFixed(1)} kWh</p>
          </div>
          <div>
            <p className="font-medium">This Week's Average:</p>
            <p className="text-xl">{consumptionData?.weeklyAverage.toFixed(1)} kWh/day</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-sm">Your consumption is {consumptionData?.consumptionChange}% lower than last week. Great job!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnergyConsumption;
