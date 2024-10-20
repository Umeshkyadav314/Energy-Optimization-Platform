import React from 'react';
import { BarChart2 } from 'lucide-react';

const EnergyConsumption: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <BarChart2 className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Energy Consumption Analytics</h2>
      </div>
      <div className="space-y-4">
        <div>
          <p className="font-medium">Today's Usage:</p>
          <p className="text-2xl font-bold">24.5 kWh</p>
        </div>
        <div>
          <p className="font-medium">This Week's Average:</p>
          <p className="text-xl">22.3 kWh/day</p>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-sm">Your consumption is 5% lower than last week. Great job!</p>
        </div>
      </div>
    </div>
  );
};

export default EnergyConsumption;