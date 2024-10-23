// src/app/api/forecasting/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for forecasting
  const weather = "Sunny"; // You can change this to any other weather condition
  const highTemp = Math.floor(Math.random() * (35 - 25 + 1)) + 25; // Random high temperature between 25°C and 35°C
  const lowTemp = Math.floor(Math.random() * (25 - 15 + 1)) + 15; // Random low temperature between 15°C and 25°C
  const solarProduction = (Math.random() * (30 - 15) + 15).toFixed(2); // Random solar production between 15 kWh and 30 kWh

  return NextResponse.json({
    weather,
    highTemp,
    lowTemp,
    solarProduction: parseFloat(solarProduction),
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
