const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  user:{ type:mongoose.Schema.Types.ObjectId, ref:"User" },
  title:String,
  description:String,
  url:String,
  type:{ type:String, default:"short" },
  likes:{ type:Number, default:0 }
},{timestamps:true});

module.exports = mongoose.model("Video", VideoSchema);
