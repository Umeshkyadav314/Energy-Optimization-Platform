import React from 'react';
import { TrendingUp } from 'lucide-react';

const Forecasting: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <TrendingUp className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Forecasting</h2>
      </div>
      <div className="space-y-4">
        <div>
          <p className="font-medium">Tomorrow's Weather:</p>
          <p className="text-lg">Sunny, High: 28°C, Low: 18°C</p>
        </div>
        <div>
          <p className="font-medium">Expected Solar Production:</p>
          <p className="text-xl text-green-600">25.3 kWh</p>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-sm">Recommendation: Schedule high-energy tasks between 10 AM and 2 PM to maximize solar usage.</p>
        </div>
      </div>
    </div>
  );
};

export default Forecasting;