import { NextResponse } from 'next/server';

export async function GET() {
  const currentRate = (Math.random() * (6 - 3) + 3).toFixed(2); // Random current rate between ₹3 and ₹6

  // Forecast for the next hour
  const nextHourForecast = (Math.random() * (6 - 3) + 3).toFixed(2); // Random forecast rate for the next hour

  return NextResponse.json({
    currentRate,
    nextHourForecast,
  });
}
