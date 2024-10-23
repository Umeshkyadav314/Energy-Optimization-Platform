// src/app/api/solar/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Dummy data for solar management
  const solarData = {
    currentProduction: 3.5, // in kW
    todaysTotal: 18.7, // in kWh
    batteryPercentage: 80, // in percentage
  };

  return NextResponse.json(solarData);
}
