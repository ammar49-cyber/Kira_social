const { Schema, model } = require("mongoose");

const ChatSchema = new Schema({
  members: [String],
  messages: [{ sender: String, text: String }]
}, { timestamps: true });

module.exports = model("Chat", ChatSchema);
