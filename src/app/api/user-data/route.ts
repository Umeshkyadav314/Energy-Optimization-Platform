import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/db/connect';
import UserData from '@/app/db/models/UserData';

// GET Request: Fetch all city data
export async function GET() {
  try {
    // Ensure the database is connected
    await connectToDatabase();

    // Fetch city data from the UserData collection
    const data = await UserData.find({});
    console.log(data)
    // Return the fetched data as JSON
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });

  }
}
