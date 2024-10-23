// src/app/api/consumption/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Dummy consumption data
  const consumptionData = {
    todayUsage: 24.5,
    weeklyAverage: 22.3,
    consumptionChange: -5, // Represents a 5% decrease
  };

  return NextResponse.json(consumptionData);
}
