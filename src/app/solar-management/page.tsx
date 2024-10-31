"use client";

import React, { useEffect, useState } from "react";
import { Sun, Battery } from "lucide-react";
import SolarManagement from "../components/SolarManagement";

const TariffMonitorPage = () => {
  const [currentProduction, setCurrentProduction] = useState<number>(0);
  const [todaysTotal, setTodaysTotal] = useState<number>(0);
  const [weeklyProduction, setWeeklyProduction] = useState<number>(0);
  const [monthlyProduction, setMonthlyProduction] = useState<number>(0);
  const [yearlyProduction, setYearlyProduction] = useState<number>(0);
  const [dailyUsage, setDailyUsage] = useState<number>(0);
  const [weeklyUsage, setWeeklyUsage] = useState<number>(0);
  const [monthlyUsage, setMonthlyUsage] = useState<number>(0);
  const [batteryPercentage, setBatteryPercentage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchSolarData = async () => {
    setLoading(true);
    try {
      // Replace this with your actual API endpoint
      const response = await fetch("/api/solar");
      if (!response.ok) {
        throw new Error("Failed to fetch solar data");
      }
      const data = await response.json();
      setCurrentProduction(data.currentProduction);
      setTodaysTotal(data.todaysTotal);
      setBatteryPercentage((data.batteryCurrent / data.batteryMax) * 100);
      setWeeklyProduction(data.weeklyProduction);
      setMonthlyProduction(data.monthlyProduction);
      setYearlyProduction(data.weeklyProduction * 52);
      setDailyUsage(data.dailyCurrent);
      setWeeklyUsage(data.weeklyCurrent);
      setMonthlyUsage(data.monthlyCurrent);
    } catch (error) {
      console.error(error);
      // Handle error (optional)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSolarData();
  }, []);

  return (
    <div className="w-1/2 m-auto h-max bg-white mt-10 p-10 rounded-xl shadow-md">
      <SolarManagement />
      <div className="bg-white p-6 rounded-xl h-full">
        {/*  */}
        {loading ? (
          <p className="text-gray-500">Loading solar data...</p>
        ) : (
          <div className="space-y-24">
            <div className="flex justify-between text-center">
              <div>
                <p className="font-medium">Weekly Production</p>
                <p className="text-xl font-bold text-green-600">
                  {weeklyProduction} kW
                </p>
              </div>
              <div>
                <p className="font-medium">Monthly Production</p>
                <p className="text-2xl font-bold text-green-600">
                  {monthlyProduction} kW
                </p>
              </div>
              <div>
                <p className="font-medium">Yearly Production</p>
                <p className="text-xl font-bold text-green-600">
                  {yearlyProduction} kW
                </p>
              </div>
            </div>
            <div className="flex justify-between text-center ">
              <div>
                <p className="font-medium">Weekly Usage</p>
                <p className="text-xl font-bold text-green-600">
                  {weeklyUsage} kW
                </p>
              </div>
              <div>
                <p className="font-medium">Daily Usage</p>
                <p className="text-2xl font-bold text-green-600">
                  {dailyUsage} kW
                </p>
              </div>
              <div>
                <p className="font-medium">Monthly Usage</p>
                <p className="text-xl font-bold text-green-600">
                  {monthlyUsage} kW
                </p>
              </div>
            </div>

          
          </div>
        )}
      </div>
    </div>
  );
};

export default TariffMonitorPage;
