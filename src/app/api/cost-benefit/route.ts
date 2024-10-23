// src/app/api/cost-benefit/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Dummy cost-benefit data
  const costBenefitData = {
    monthlySavings: 78.50,
    annualSavings: 945.00,
    co2Offset: 2.5, // CO2 offset in tons
  };

  return NextResponse.json(costBenefitData);
}
