const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// DASHBOARD STATS
router.get("/stats", auth, admin, async (req, res) => {
  const users = await User.countDocuments();
  const creators = await User.countDocuments({ role: "creator" });
  const posts = await Post.countDocuments();
  const comments = await Comment.countDocuments();
  res.json({ users, creators, posts, comments });
});

// USERS
router.get("/users", auth, admin, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

router.put("/ban/:id", auth, admin, async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { banned: true });
  res.json({ success: true });
});

router.put("/unban/:id", auth, admin, async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { banned: false });
  res.json({ success: true });
});

router.put("/make-creator/:id", auth, admin, async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { role: "creator" });
  res.json({ success: true });
});

// CONTENT
router.get("/posts", auth, admin, async (req, res) => {
  const posts = await Post.find().populate("user", "username");
  res.json(posts);
});

router.delete("/post/:id", auth, admin, async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// COMMENTS
router.get("/comments", auth, admin, async (req, res) => {
  const comments = await Comment.find().populate("user post");
  res.json(comments);
});

router.delete("/comment/:id", auth, admin, async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
