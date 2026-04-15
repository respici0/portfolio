import mongoose from 'mongoose';

const MONGODB_URI = process.env.MOGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error('MONDODB_URI is not defined.');
}

let isConnected = false;

export async function connectDB() {
    if (isConnected) return;
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
}