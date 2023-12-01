import mongoose from 'mongoose';

const searchSchema = new mongoose.Schema({
  query: { type: String, required: true },
  results: { type: Array, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Repository = mongoose.model('Repository', searchSchema);

export default Repository;