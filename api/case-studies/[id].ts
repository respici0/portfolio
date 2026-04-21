import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connectDB } from '../../lib/mongoose';
import CaseStudy from '../../lib/models/CaseStudy';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  await connectDB();
  const caseStudy = await CaseStudy.findOne({ projectId: id }).lean();

  if (!caseStudy) {
    return res.status(404).json({ error: 'Not found' });
  }

  res.json(caseStudy);
}
