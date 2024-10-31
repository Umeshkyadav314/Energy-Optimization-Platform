import mongoose from 'mongoose';

// Define a cached object for global state to prevent creating multiple connections
let cached = (global as any).mongoose as {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

// MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    // Return cached connection if available
    return cached.conn;
  }

  if (!cached.promise) {
    // Set up the connection promise if not yet done
    cached.promise = mongoose.connect(MONGODB_URI as string, {serverSelectionTimeoutMS: 30000}).then((mongoose) => {
      console.log('Connected to MongoDB');
      return mongoose;
    }).catch((error) => {
      console.error('MongoDB connection error:', error);
      throw error;
    });
  }
  
  // Await and cache the resolved connection
  cached.conn = await cached.promise;
  return cached.conn;
}
