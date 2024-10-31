"use client";
import CostBenefitAnalysis from "../components/CostBenefitAnalysis";
import React, { useEffect, useState } from "react";
import { DollarSign, IndianRupee } from "lucide-react";

interface CostBenefitData {
  monthlySavings: number;
  annualSavings: number;
  co2Offset: number;
  monthlyCurrent: number;
  monthlyProduction: number;
  weeklyCurrent: number;
  weeklyProduction: number;
  dailyCurrent: number;
  currentRate: number;
}
const TariffMonitorPage = () => {
  const [costBenefitData, setCostBenefitData] =
    useState<CostBenefitData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchCostBenefitData = async () => {
    setLoading(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/cost-benefit");
      if (!response.ok) {
        throw new Error("Failed to fetch cost-benefit data");
      }
      const data = await response.json();
      setCostBenefitData(data);
    } catch (error) {
      console.log(error);
      // Optionally handle errors here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCostBenefitData();
  }, []);
  return (
    <div className="w-1/2 m-auto h-max bg-white mt-10 p-10 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <IndianRupee className="mr-2 text-green-600" />
        <h2 className="text-xl font-semibold">Cost-Benefit Analysis</h2>
      </div>
      <div className="bg-white p-4 rounded-xl">
        {loading ? (
          <p className="text-gray-500">Loading cost-benefit data...</p>
        ) : (
          <div className="space-y-10 ">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-xl mb-4 align-baseline">This Month's Savings:</p>
                <p className="text-2xl font-bold text-green-600">
                  <IndianRupee className="inline" />
                  {costBenefitData?.monthlySavings.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl mb-4 align-baseline">Projected Annual Savings:</p>
                <p className="text-xl">
                  <IndianRupee className="inline" />
                  {costBenefitData?.annualSavings.toFixed(2)}
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded">
                <p className="text-sm">
                  Your solar system has offset {costBenefitData?.co2Offset} tons
                  of CO2 emissions this year!
                </p>
              </div>
            </div>
            <div className="space-y-4 grid grid-cols-2 text-center gap-8">
              <div>
                <p className="font-semibold text-xl mb-4 align-baseline">Weekly Usage</p>
                <p className="text-2xl font-bold text-green-600">
                  <IndianRupee className="inline" />
                  {costBenefitData?.weeklyCurrent}
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl mb-4 align-baseline">Weekly Production</p>
                <p className="text-2xl">
                  <IndianRupee className="inline" />
                  {costBenefitData?.weeklyProduction}
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl mb-2 align-baseline">Monthly Usage</p>
                <p className="text-2xl font-bold text-green-600">
                  <IndianRupee className="inline" />
                  {costBenefitData?.monthlyCurrent}
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl mb-2 align-baseline">Monthly Production</p>
                <p className="text-xl">
                  <IndianRupee className="inline" />
                  {costBenefitData?.monthlyProduction}
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
