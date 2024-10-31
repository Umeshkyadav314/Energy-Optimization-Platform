import mongoose, { Schema, Document } from 'mongoose';

export interface ICity extends Document {
  temperature: {
    current: {
      value: number;
      unit: string;
    };
    forecast: {
      date: string;
      high: number;
      low: number;
    }[];
  };
  weather: {
    description: string;
    humidity: number;
    wind: {
      speed: number;
      direction: string;
    };
  };
  tariffRates: {
    current: number;
    forecast: {
      hour: string;
      rate: number;
    }[];
  };
  peakHours: {
    timing: {
      start: string;
      end: string;
    }[];
  };
  notifications: {
    id: number;
    type: string;
    message: string;
    timestamp: string;
    severity: string;
  }[];
  hourlyDemand: {
    date: string;
    hourlyData: {
      hour: string;
      demand: number;
    }[];
  }[];
}

const CitySchema: Schema = new Schema({
  temperature: {
    current: {
      value: { type: Number, required: true },
      unit: { type: String, required: true },
    },
    forecast: [
      {
        date: { type: String, required: true },
        high: { type: Number, required: true },
        low: { type: Number, required: true },
      },
    ],
  },
  weather: {
    description: { type: String, required: true },
    humidity: { type: Number, required: true },
    wind: {
      speed: { type: Number, required: true },
      direction: { type: String, required: true },
    },
  },
  tariffRates: {
    current: { type: Number, required: true },
    forecast: [
      {
        hour: { type: String, required: true },
        rate: { type: Number, required: true },
      },
    ],
  },
  peakHours: {
    timing: [
      {
        start: { type: String, required: true },
        end: { type: String, required: true },
      },
    ],
  },
  notifications: [
    {
      id: { type: Number, required: true },
      type: { type: String, required: true },
      message: { type: String, required: true },
      timestamp: { type: String, required: true },
      severity: { type: String, required: true },
    },
  ],
  hourlyDemand: [
    {
      date: { type: String, required: true },
      hourlyData: [
        {
          hour: { type: String, required: true },
          demand: { type: Number, required: true },
        },
      ],
    },
  ],
});

// Use existing model if it exists, otherwise create a new one
const CityData = mongoose.models.CityData || mongoose.model<ICity>('CityData', CitySchema);

export default CityData;
