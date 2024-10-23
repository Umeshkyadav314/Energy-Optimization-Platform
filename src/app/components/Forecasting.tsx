// src/app/components/Forecasting.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';

const Forecasting: React.FC = () => {
  const [weather, setWeather] = useState<string | null>(null);
  const [highTemp, setHighTemp] = useState<number | null>(null);
  const [lowTemp, setLowTemp] = useState<number | null>(null);
  const [solarProduction, setSolarProduction] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch forecasting data from the API
  const fetchForecastData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/forecasting');
      if (!response.ok) {
        throw new Error('Failed to fetch forecasting data');
      }
      const data = await response.json();
      setWeather(data.weather);
      setHighTemp(data.highTemp);
      setLowTemp(data.lowTemp);
      setSolarProduction(data.solarProduction);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch forecasting data on mount
  useEffect(() => {
    fetchForecastData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <TrendingUp className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Forecasting</h2>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading forecasting data...</p>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="font-medium">Tomorrow's Weather:</p>
            <p className="text-lg">{weather}, High: {highTemp}°C, Low: {lowTemp}°C</p>
          </div>
          <div>
            <p className="font-medium">Expected Solar Production:</p>
            <p className="text-xl text-green-600">{solarProduction} kWh</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-sm">Recommendation: Schedule high-energy tasks between 10 AM and 2 PM to maximize solar usage.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forecasting;
