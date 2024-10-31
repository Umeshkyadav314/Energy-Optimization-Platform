import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/db/connect';
import CityData from '@/app/db/models/CityData';

// GET Request: Fetch all city data
export async function GET() {
  try {
    await connectToDatabase();
    // Fetch city data from the CityData collection
    const cities = await CityData.find({});
    // Return the fetched data as JSON
    return NextResponse.json(cities, { status: 200 });
  } catch (error) {
    console.error('Error fetching city data:', error);
    return NextResponse.json({ error: 'Failed to fetch city data' }, { status: 500 });

  }
}
