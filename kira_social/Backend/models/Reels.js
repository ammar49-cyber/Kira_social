const { Schema, model } = require("mongoose");

const ReelSchema = new Schema({
  userId: String,
  video: String,
  likes: [String]
}, { timestamps: true });

module.exports = model("Reel", ReelSchema);
