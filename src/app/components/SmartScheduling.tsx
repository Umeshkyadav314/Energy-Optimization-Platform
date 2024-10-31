"use client";

import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

interface Task {
  id: number;
  description: string;
  time: string;
}

const SmartScheduling: React.FC = () => {
  const [nextTask, setNextTask] = useState<Task | null>(null);
  const [upcomingTasks, setUpcomingTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchSchedulingData = async () => {
    setLoading(true);
    try {
      // Replace this with your actual API endpoint
      const response = await fetch('/api/scheduling'); 
      if (!response.ok) {
        throw new Error('Failed to fetch scheduling data');
      }
      const data = await response.json();
      setNextTask(data.nextScheduledTask);
      setUpcomingTasks(data.upcomingTasks);
    } catch (error) {
      console.log(error);
      // Handle error (optional)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedulingData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl h-full border border-gray-300">
      <div className="flex items-center mb-4">
        <Calendar className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Smart Scheduling</h2>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading scheduling data...</p>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="font-medium">Next Scheduled Task:</p>
            {nextTask ? (
              <p className="text-lg">{nextTask.description} at {nextTask.time}</p>
            ) : (
              <p className="text-lg">No upcoming tasks scheduled.</p>
            )}
          </div>
          <div>
            <p className="font-medium">Upcoming:</p>
            {upcomingTasks.length > 0 ? (
              <ul className="list-disc list-inside">
                {upcomingTasks.map((task) => (
                  <li key={task.id}>{task.description} at {task.time}</li>
                ))}
              </ul>
            ) : (
              <p>No upcoming tasks.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartScheduling;
