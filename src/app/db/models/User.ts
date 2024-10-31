import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  role: string;
  preferences: {
    notifyByEmail: boolean;
    preferredUnits: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    preferences: {
      notifyByEmail: { type: Boolean, default: true },
      preferredUnits: { type: String, default: 'kWh' },
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
