import React from 'react';
import { Bell } from 'lucide-react';

const Notifications: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Bell className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Notifications</h2>
      </div>
      <div className="space-y-4">
        <div className="bg-yellow-100 p-3 rounded">
          <p className="text-sm font-medium">High Tariff Alert</p>
          <p className="text-xs">Peak rates expected from 5 PM to 8 PM today. Consider reducing usage.</p>
        </div>
        <div className="bg-green-100 p-3 rounded">
          <p className="text-sm font-medium">Excess Solar Energy</p>
          <p className="text-xs">Opportunity to sell 5 kWh back to the grid at $0.15/kWh.</p>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default Notifications;