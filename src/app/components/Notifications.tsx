"use client";

import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'alert' | 'info';
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/notifications');
      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error(error);
      // Optionally handle errors here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Bell className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Notifications</h2>
      </div>
      <div className="space-y-4">
        {loading ? (
          <p className="text-gray-500">Loading notifications...</p>
        ) : (
          notifications.map(notification => (
            <div
              key={notification.id}
              className={`p-3 rounded ${
                notification.type === 'alert' ? 'bg-yellow-100' : 'bg-green-100'
              }`}
            >
              <p className="text-sm font-medium">{notification.title}</p>
              <p className="text-xs">{notification.message}</p>
            </div>
          ))
        )}
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default Notifications;
