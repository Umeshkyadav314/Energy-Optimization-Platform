"use client";

import React, { useEffect, useState } from 'react';
import { DollarSign, IndianRupee } from 'lucide-react';

interface CostBenefitData {
  monthlySavings: number;
  annualSavings: number;
  co2Offset: number;
}

const CostBenefitAnalysis: React.FC = () => {
  const [costBenefitData, setCostBenefitData] = useState<CostBenefitData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCostBenefitData = async () => {
    setLoading(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/cost-benefit');
      if (!response.ok) {
        throw new Error('Failed to fetch cost-benefit data');
      }
      const data = await response.json();
      setCostBenefitData(data);
    } catch (error) {
      console.error(error);
      // Optionally handle errors here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCostBenefitData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <IndianRupee className="mr-2 text-green-600" />
        <h2 className="text-xl font-semibold">Cost-Benefit Analysis</h2>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading cost-benefit data...</p>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="font-medium">This Month's Savings:</p>
            <p className="text-2xl font-bold text-green-600"><IndianRupee className='inline'/>{costBenefitData?.monthlySavings.toFixed(2)}</p>
          </div>
          <div>
            <p className="font-medium">Projected Annual Savings:</p>
            <p className="text-xl"><IndianRupee className='inline'/>{costBenefitData?.annualSavings.toFixed(2)}</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-sm">Your solar system has offset {costBenefitData?.co2Offset} tons of CO2 emissions this year!</p>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
            View Detailed Report
          </button>
        </div>
      )}
    </div>
  );
};

export default CostBenefitAnalysis;
