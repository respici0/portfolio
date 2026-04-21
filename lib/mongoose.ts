import mongoose from 'mongoose';

declare global {
  var _mongooseConn: Promise<typeof mongoose> | undefined;
}

export async function connectDB() {
  if (global._mongooseConn) return global._mongooseConn;
  const uri = (import.meta as any).env?.MONGODB_URI ?? process.env.MONGODB_URI;
  global._mongooseConn = mongoose.connect(uri ?? "" );
  return global._mongooseConn;
}
