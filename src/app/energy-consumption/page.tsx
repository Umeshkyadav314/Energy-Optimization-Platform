"use client"
"use client";

import React, { useEffect, useState } from 'react';
import { BarChart2 } from 'lucide-react';
import EnergyConsumption from '../components/EnergyConsumption';

interface ConsumptionData {
  todayUsage: number;
  weeklyAverage: number;
  monthlyAverage: number;
  consumptionChange: number;
}

const TariffMonitorPage = () => {
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
    <div className='w-1/2 m-auto h-max bg-white mt-10 p-10 rounded-xl shadow-md'>

      <EnergyConsumption />
      <div className="bg-white p-6 rounded-xl h-full">
    
      {loading ? (
        <p className="text-gray-500">Loading energy consumption data...</p>
      ) : (
        <div className="space-y-8">
          <div>
            <p className="font-medium">Monthly's Average:</p>
            <p className="text-2xl font-bold">{consumptionData?.monthlyAverage.toFixed(1)} kWh</p>
          </div>
         
         
        </div>
      )}
    </div>
    </div>
  );
};

export default TariffMonitorPage;
