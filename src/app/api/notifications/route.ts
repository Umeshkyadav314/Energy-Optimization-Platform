// src/app/api/notifications/route.ts
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
  const todayHigh = cities[0].temperature.forecast[0].high;
  const todayLow = cities[0].temperature.forecast[0].low;

  const notifications = data[0].notifications;
  // notifications.append(cities[0].notifications)

  return NextResponse.json(notifications);
}
