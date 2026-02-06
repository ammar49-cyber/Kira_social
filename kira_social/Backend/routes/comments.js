const router = require("express").Router();
const Comment = require("../models/Comment");
const verifyToken = require("../middleware/authMiddleware");
const sendPush = require("../utils/sendNotification");
const io = require("socket.io");

router.post("/:videoId", verifyToken, async (req,res)=>{
  const comment = new Comment({
    user:req.user.id,
    video:req.params.videoId,
    text:req.body.text
  });
  await comment.save();

  // Emit real-time comment
  req.app.get("io").to(req.params.videoId).emit("newComment", comment);

  // Push notification to video owner (optional)
  // sendPush(videoOwnerToken, "New Comment", `${req.user.username}: ${req.body.text}`);

  res.json(comment);
});

router.get("/:videoId", async (req,res)=>{
  const comments = await Comment.find({video:req.params.videoId}).populate("user","username");
  res.json(comments);
});

module.exports = router;
