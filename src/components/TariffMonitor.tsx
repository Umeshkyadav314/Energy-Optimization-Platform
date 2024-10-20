import React from 'react';
import { Clock } from 'lucide-react';

const TariffMonitor: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Clock className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Real-Time Tariff Monitor</h2>
      </div>
      <div className="space-y-4">
        <div>
          <p className="font-medium">Current Rate:</p>
          <p className="text-2xl font-bold text-green-600">$0.12/kWh</p>
        </div>
        <div>
          <p className="font-medium">Next Hour Forecast:</p>
          <p className="text-xl text-orange-500">$0.15/kWh</p>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-sm">Tip: Consider shifting high-energy tasks to after 10 PM for lower rates.</p>
        </div>
      </div>
    </div>
  );
};

export default TariffMonitor;