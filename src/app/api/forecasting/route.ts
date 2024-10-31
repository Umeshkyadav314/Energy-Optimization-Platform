// src/app/api/forecasting/route.ts
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
  const highTemp = Math.floor(( cities[0].temperature.forecast[1].high/100 + Math.random()) * (35 - 25 + 1)) + 25;
  const lowTemp = Math.floor(( cities[0].temperature.forecast[1].low/100 + Math.random()) * (35 - 25 + 1)) + 25;
  const weatherTomorrow = "Humid";

  const currentProduction = data[0].production.current.value;
  const expectedTodayProduction = Math.floor((data[0].production.expected.today/10 + Math.random())  * (30 - 15) + 15).toFixed(1);
  const expectedTomorrowProduction = Math.floor((data[0].production.expected.tomorrow/10 + Math.random())  * (30 - 15) + 15).toFixed(2);
  const monthlyProduction = data[0].production.monthly.total;
  const monthlyUsage = data[0].production.monthly.usage;
  
  return NextResponse.json({
    temperature,
    weather,
    todayHigh,
    todayLow,
    highTemp,
    lowTemp,
    weatherTomorrow,
    currentProduction,
    expectedTodayProduction,
    expectedTomorrowProduction,
    monthlyProduction,
    monthlyUsage
  });
}


// src/app/api/weather/route.ts
// import { NextResponse } from 'next/server';

// const API_KEY = 'YOUR_API_KEY';
// const CITY = 'Mumbai,IN'; // Change this to the desired city

// export async function GET() {
//   try {
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
//     );

//     if (!res.ok) {
//       throw new Error('Failed to fetch weather data');
//     }

//     const data = await res.json();
//     const weatherData = {
//       description: data.weather[0].description,
//       high: data.main.temp_max,
//       low: data.main.temp_min,
//       solarProduction: Math.random() * 30, // Dummy solar production data for testing
//     };

//     return NextResponse.json(weatherData);
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
//   }
// }
