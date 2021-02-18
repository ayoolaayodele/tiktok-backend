import mongoose from "mongoose";

const tiktokSchema = new mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

export default mongoose.model("videos", tiktokSchema);
