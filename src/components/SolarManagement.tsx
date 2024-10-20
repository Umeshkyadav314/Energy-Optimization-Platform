import React from 'react';
import { Sun, Battery } from 'lucide-react';

const SolarManagement: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Sun className="mr-2 text-yellow-500" />
        <h2 className="text-xl font-semibold">Solar Energy Management</h2>
      </div>
      <div className="space-y-4">
        <div>
          <p className="font-medium">Current Production:</p>
          <p className="text-2xl font-bold text-green-600">3.5 kW</p>
        </div>
        <div>
          <p className="font-medium">Today's Total:</p>
          <p className="text-xl">18.7 kWh</p>
        </div>
        <div className="flex items-center">
          <Battery className="mr-2 text-blue-500" />
          <div>
            <p className="font-medium">Battery Storage:</p>
            <p className="text-lg">80% (6.4 kWh / 8 kWh)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarManagement;