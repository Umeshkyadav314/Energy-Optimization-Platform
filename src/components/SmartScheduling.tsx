import React from 'react';
import { Calendar } from 'lucide-react';

const SmartScheduling: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Calendar className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Smart Scheduling</h2>
      </div>
      <div className="space-y-4">
        <div>
          <p className="font-medium">Next Scheduled Task:</p>
          <p className="text-lg">Dishwasher at 11:00 PM</p>
        </div>
        <div>
          <p className="font-medium">Upcoming:</p>
          <ul className="list-disc list-inside">
            <li>EV Charging at 2:00 AM</li>
            <li>Laundry at 6:00 AM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmartScheduling;