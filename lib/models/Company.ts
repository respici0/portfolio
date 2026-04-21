import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
  projectId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  links: [{ type: { type: String }, url: String }],
  tech: [String],
}, { _id: false });

const CompanySchema = new Schema({
  tag: { type: String, required: true, unique: true },
  year: String,
  order: { type: Number, required: true },
  projects: [ProjectSchema],
});

export default mongoose.models.Company || mongoose.model('Company', CompanySchema);
