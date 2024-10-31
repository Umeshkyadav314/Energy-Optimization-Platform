// src/app/api/scheduling/route.ts
import { connectToDatabase } from '@/app/db/connect';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDatabase(); 
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
