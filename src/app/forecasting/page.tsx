"use client";
import Forecasting from "../components/Forecasting";
import React, { useEffect, useState } from "react";

const TariffMonitorPage = () => {
  const [weather, setWeather] = useState<string | null>(null);
  const [highTemp, setHighTemp] = useState<number | null>(null);
  const [lowTemp, setLowTemp] = useState<number | null>(null);
  const [solarProduction, setSolarProduction] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [monthlyProduction, setMonthlyProduction] = useState<number >(0);
  const [monthlyUsage, setMonthlyUsage] = useState<number >(0);
  const fetchForecastData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/forecasting");
      if (!response.ok) {
        throw new Error("Failed to fetch forecasting data");
      }
      const data = await response.json();
      setWeather(data.weatherTomorrow);
      setHighTemp(data.highTemp);
      setLowTemp(data.lowTemp);
      setSolarProduction(data.expectedTomorrowProduction);
      setMonthlyProduction(data.monthlyProduction);
      setMonthlyUsage(data.monthlyUsage);
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
    <div className="w-1/2 m-auto h-max bg-white mt-10 p-10 rounded-xl shadow-md gap-10 mb-8">
      <Forecasting />

      <div className="bg-white p-6 h-full rounded-xl">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-semibold"> </h2>
        </div>
        {loading ? (
          <p className="text-gray-500">Loading forecasting data...</p>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="font-medium">Tomorrow's Weather:</p>
              <p className="text-lg">
                {weather}, High: {highTemp}°C, Low: {lowTemp}°C
              </p>
            </div>
            <div>
              <p className="font-medium">Expected Tomorrow Production:</p>
              <p className="text-xl text-green-600">{solarProduction} kWh</p>
            </div>
            <div>
              <p className="font-medium">Monthly Solar Production:</p>
              <p className="text-xl text-green-600">{monthlyProduction} kWh</p>
            </div>
            <div>
              <p className="font-medium">Total Monthly Usage :</p>
              <p className="text-xl text-green-600">{monthlyUsage} kWh</p>
            </div>
            <div>
              <p className="font-medium">Estimate Yearly Production :</p>
              <p className="text-xl text-green-600">
                {monthlyProduction * 12} kWh
              </p>
            </div>
            <div>
              <p className="font-medium">Estimate Yearly Usage :</p>
              <p className="text-xl text-green-600">{monthlyUsage * 12} kWh</p>
            </div>

            
          </div>
        )}
      </div>
    </div>
  );
};

export default TariffMonitorPage;
