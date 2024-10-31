// src/app/components/TariffMonitor.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const TariffMonitor: React.FC = () => {
  const [currentRate, setCurrentRate] = useState<number | null>(null);
  const [nextHourForecast, setNextHourForecast] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch tariff data from the API
  const fetchTariffData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/tariff');
      if (!response.ok) {
        throw new Error('Failed to fetch tariff data');
      }
      const data = await response.json();
      setCurrentRate(parseFloat(data.currentRate));
      setNextHourForecast(parseFloat(data.nextHourForecast));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch tariff data on mount and set up interval
  useEffect(() => {
    fetchTariffData();
    const interval = setInterval(fetchTariffData, 60000); // Refresh data every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-300">
      <div className="flex items-center mb-4">
        <Clock className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Real-Time Tariff Monitor</h2>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading tariff data...</p>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="font-medium">Current Rate:</p>
            <p className="text-2xl font-bold text-green-600">&#8377;{currentRate?.toFixed(2)}/kWh</p>
          </div>
          <div>
            <p className="font-medium">Next Hour Forecast:</p>
            <p className="text-xl font-bold text-orange-500">&#8377;{nextHourForecast?.toFixed(2)}/kWh</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-sm">Tip: Consider shifting high-energy tasks to after 10 PM for lower rates.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TariffMonitor;
