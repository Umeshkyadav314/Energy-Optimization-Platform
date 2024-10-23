// src/app/api/scheduling/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Dummy scheduling data
  const schedulingData = {
    nextScheduledTask: {
      id: 1,
      description: 'Dishwasher',
      time: '11:00 PM',
    },
    upcomingTasks: [
      { id: 2, description: 'EV Charging', time: '2:00 AM' },
      { id: 3, description: 'Laundry', time: '6:00 AM' },
    ],
  };

  return NextResponse.json(schedulingData);
}
