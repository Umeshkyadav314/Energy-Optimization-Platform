import mongoose, { Schema, Document } from 'mongoose';

// Define interfaces for types
interface CurrentProduction {
  date: string;
  value: number;
  unit: string;
}

interface Last30DaysProduction {
  date: string;
  production: number;
}

interface ExpectedProduction {
  today: number;
  tomorrow: number;
}

interface MonthlyProduction {
  total: number;
  usage: number;
}

interface Savings {
  daily: number;
  weekly: number;
  monthly: number;
  lastYear: number;
}

interface BatteryCapacity {
  current: number;
  max: number;
}

interface CurrentUsage {
  daily: number;
  monthly: number;
  weekly: number;
  highEnergyAppliances: {
    [appliance: string]: number;
  };
}

interface HourlyRate {
  date: string;
  hour: string;
  rate: number;
}

interface Notification {
  id: number;
  type: string;
  message: string;
  timestamp: string;
  severity: 'high' | 'medium' | 'low' | 'info';
}

// Main document interface
interface UserDocument extends Document {
  username: string;
  production: {
    current: CurrentProduction;
    last30Days: Last30DaysProduction[];
    expected: ExpectedProduction;
    monthly: MonthlyProduction;
    savings: Savings;
    battery: {
      capacity: BatteryCapacity;
    };
  };
  usage: {
    current: CurrentUsage;
    hourlyRates: HourlyRate[];
  };
  notifications: Notification[];
}

// Define schema
const UserSchema = new Schema<UserDocument>({
  username: { type: String, required: true },
  production: {
    current: {
      date: { type: String, required: true },
      value: { type: Number, required: true },
      unit: { type: String, required: true },
    },
    last30Days: [
      {
        date: { type: String, required: true },
        production: { type: Number, required: true },
      },
    ],
    expected: {
      today: { type: Number, required: true },
      tomorrow: { type: Number, required: true },
    },
    monthly: {
      total: { type: Number, required: true },
      usage: { type: Number, required: true },
    },
    savings: {
      daily: { type: Number, required: true },
      weekly: { type: Number, required: true },
      monthly: { type: Number, required: true },
      lastYear: { type: Number, required: true },
    },
    battery: {
      capacity: {
        current: { type: Number, required: true },
        max: { type: Number, required: true },
      },
    },
  },
  usage: {
    current: {
      daily: { type: Number, required: true },
      monthly: { type: Number, required: true },
      weekly: { type: Number, required: true },
      highEnergyAppliances: {
        type: Map,
        of: Number,
      },
    },
    hourlyRates: [
      {
        date: { type: String, required: true },
        hour: { type: String, required: true },
        rate: { type: Number, required: true },
      },
    ],
  },
  notifications: [
    {
      id: { type: Number, required: true },
      type: { type: String, required: true },
      message: { type: String, required: true },
      timestamp: { type: String, required: true },
      severity: { type: String, enum: ['high', 'medium', 'low', 'info'], required: true },
    },
  ],
});

// Export model
export default mongoose.models.UserData || mongoose.model<UserDocument>('UserData', UserSchema);
