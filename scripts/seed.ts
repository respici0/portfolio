import mongoose from 'mongoose';
import { companies } from '../src/data/selectedWork/selectedWork';
import { caseStudies } from '../src/data/selectedWork/caseStudies';
import Company from '../lib/models/Company';
import CaseStudy from '../lib/models/CaseStudy';

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set');
  process.exit(1);
}

await mongoose.connect(uri);
console.log('Connected to MongoDB');

// Seed companies
for (let i = 0; i < companies.length; i++) {
  const company = companies[i];
  await Company.updateOne(
    { tag: company.tag },
    { ...company, order: i },
    { upsert: true }
  );
  console.log(`Upserted company: ${company.tag}`);
}

// Seed case studies
for (const [projectId, data] of Object.entries(caseStudies)) {
  await CaseStudy.updateOne(
    { projectId },
    { projectId, ...data },
    { upsert: true }
  );
  console.log(`Upserted case study: ${projectId}`);
}

console.log('Seed complete');
await mongoose.disconnect();
