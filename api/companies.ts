import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connectDB } from '../lib/mongoose';
import Company from '../lib/models/Company';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await connectDB();
  const companies = await Company.find().sort({ order: 1 }).lean();
  res.json(companies);
}
