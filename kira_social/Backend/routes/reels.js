const router = require("express").Router();
const Reel = require("../models/Reel");

router.post("/", async (req, res) => {
  const reel = await Reel.create(req.body);
  res.json(reel);
});

router.get("/", async (req, res) => {
  const reels = await Reel.find().sort({ createdAt: -1 });
  res.json(reels);
});

module.exports = router;
