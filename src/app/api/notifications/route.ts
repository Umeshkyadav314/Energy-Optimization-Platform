// src/app/api/notifications/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Dummy notifications data
  const notifications = [
    {
      id: 1,
      title: "High Tariff Alert",
      message: "Peak rates expected from 5 PM to 8 PM today. Consider reducing usage.",
      type: "alert",
    },
    {
      id: 2,
      title: "Excess Solar Energy",
      message: "Opportunity to sell 5 kWh back to the grid at $0.15/kWh.",
      type: "info",
    },
    // Add more notifications as needed
  ];

  return NextResponse.json(notifications);
}
