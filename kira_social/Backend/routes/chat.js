const router = require("express").Router();
const Chat = require("../models/Chat");

router.post("/", async (req, res) => {
  const chat = await Chat.create(req.body);
  res.json(chat);
});

router.get("/:userId", async (req, res) => {
  const chats = await Chat.find({ members: req.params.userId });
  res.json(chats);
});

module.exports = router;
