import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  phone: Number
});

export default mongoose.model("User", userSchema);