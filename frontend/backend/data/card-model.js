import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: String,
  description: String
});

export default mongoose.model("Card", cardSchema);