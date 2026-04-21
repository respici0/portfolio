import mongoose, { Schema } from 'mongoose';

const MetaItemSchema = new Schema({
  value: { type: String, required: true },
  sub: { type: String, required: true },
}, { _id: false });

const CaseStudySchema = new Schema({
  projectId: { type: String, required: true, unique: true },
  meta: {
    role: MetaItemSchema,
    stack: MetaItemSchema,
    outcome: MetaItemSchema,
  },
  problem: [String],
  beforeAfter: {
    before: [String],
    after: [String],
  },
  screenshot: {
    caption: String,
    description: String,
  },
  hardParts: [{
    title: { type: String, required: true },
    description: { type: Schema.Types.Mixed, required: true },
    _id: false,
  }],
  outcome: {
    heading: { type: String, required: true },
    body: { type: String, required: true },
  },
  thoughts: [String],
});

export default mongoose.models.CaseStudy || mongoose.model('CaseStudy', CaseStudySchema);
