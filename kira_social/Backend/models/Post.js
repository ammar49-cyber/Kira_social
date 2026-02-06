const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  userId: String,
  image: String,
  caption: String,
  likes: [String],
  comments: [{ userId: String, text: String }]
}, { timestamps: true });

module.exports = model("Post", PostSchema);
