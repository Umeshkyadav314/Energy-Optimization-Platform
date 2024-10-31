"use client";


import React, { useEffect, useState } from 'react';
import { Sun, Battery } from 'lucide-react';

const SolarManagement: React.FC = () => {
  const [currentProduction, setCurrentProduction] = useState<number>(0);
  const [todaysTotal, setTodaysTotal] = useState<number>(0);
  const [batteryPercentage, setBatteryPercentage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchSolarData = async () => {
    setLoading(true);
    try {
      // Replace this with your actual API endpoint
      const response = await fetch('/api/solar'); 
      if (!response.ok) {
        throw new Error('Failed to fetch solar data');
      }
      const data = await response.json();
      setCurrentProduction(data.currentProduction);
      setTodaysTotal(data.todaysTotal);
      setBatteryPercentage(data.batteryCurrent / data.batteryMax  * 100);
    } catch (error) {
      console.log(error);
      // Handle error (optional)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSolarData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl h-full border border-gray-300">
      <div className="flex items-center mb-4">
        <Sun className="mr-2 text-yellow-500" />
        <h2 className="text-xl font-semibold">Solar Energy Management</h2>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading solar data...</p>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="font-medium">Current Production:</p>
            <p className="text-2xl font-bold text-green-600">{currentProduction.toFixed(1)} kW</p>
          </div>
          <div>
            <p className="font-medium">Today's Total:</p>
            <p className="text-xl">{todaysTotal.toFixed(1)} kWh</p>
          </div>
          <div className="flex items-center">
            <Battery className="mr-2 text-blue-500" />
            <div>
              <p className="font-medium">Battery Storage:</p>
              <p className="text-lg">{batteryPercentage}% ({(batteryPercentage / 100 * 8).toFixed(1)} kWh / 8 kWh)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolarManagement;
