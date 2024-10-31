// src/app/api/cost-benefit/route.ts
import { connectToDatabase } from '@/app/db/connect';
import CityData from '@/app/db/models/CityData';
import UserData from '@/app/db/models/UserData';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDatabase();
  const cities = await CityData.find({});
  const data = await UserData.find({});
  const temperature = cities[0].temperature.current.value;
  const weather = cities[0].weather.description;
  const tariffRates = cities[0].tariffRates;
  const currentRate = (tariffRates.current * (6 - 3) + 3).toFixed(2); 
  const currentProduction = data[0].production.current.value;
  const expectedTodayProduction = Math.floor((data[0].production.expected.today/10 + Math.random())  * (30 - 15) + 15);
  const weeklyProduction = Math.floor(((data[0].production.expected.today/10 + Math.random())  * (30 - 15) + 15) * 7).toFixed(2);
  const monthlyProduction = data[0].production.monthly.total;
  const monthlyUsage = data[0].production.monthly.usage;
  
  const batteryCurrent = data[0].production.battery.capacity.current;
  const batteryMax = data[0].production.battery.capacity.max;

  const dailyCurrent =  data[0].usage.current.daily;
  const weeklyCurrent =  data[0].usage.current.weekly;
  const monthlyCurrent =  data[0].usage.current.monthly;

  const savings = (monthlyUsage - monthlyProduction) * parseInt(currentRate); 
  const costBenefitData = {
    monthlySavings: savings,
    annualSavings: savings * 12,
    co2Offset: 2.5, 
    monthlyCurrent,
    monthlyProduction,
    weeklyCurrent,
    weeklyProduction,
    dailyCurrent,
    currentRate
  };

  return NextResponse.json(costBenefitData);
}
