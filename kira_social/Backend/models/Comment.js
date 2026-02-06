const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user:{ type:mongoose.Schema.Types.ObjectId, ref:"User" },
  video:{ type:mongoose.Schema.Types.ObjectId, ref:"Video" },
  text:String
},{timestamps:true});

module.exports = mongoose.model("Comment", CommentSchema);
