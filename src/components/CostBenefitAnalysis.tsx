import React from 'react';
import { DollarSign } from 'lucide-react';

const CostBenefitAnalysis: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <DollarSign className="mr-2 text-green-600" />
        <h2 className="text-xl font-semibold">Cost-Benefit Analysis</h2>
      </div>
      <div className="space-y-4">
        <div>
          <p className="font-medium">This Month's Savings:</p>
          <p className="text-2xl font-bold text-green-600">$78.50</p>
        </div>
        <div>
          <p className="font-medium">Projected Annual Savings:</p>
          <p className="text-xl">$945.00</p>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-sm">Your solar system has offset 2.5 tons of CO2 emissions this year!</p>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
          View Detailed Report
        </button>
      </div>
    </div>
  );
};

export default CostBenefitAnalysis;