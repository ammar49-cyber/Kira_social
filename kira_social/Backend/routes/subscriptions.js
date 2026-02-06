const router = require("express").Router();
const User = require("../models/User");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const verifyToken = require("../middleware/authMiddleware");

router.post("/subscribe", verifyToken, async (req,res)=>{
  const {creatorId} = req.body;
  const creator = await User.findById(creatorId);
  if(!creator || !creator.isCreator) return res.status(400).json("Not a creator");

  const paymentIntent = await stripe.paymentIntents.create({
    amount: creator.subscriptionPrice*100,
    currency: "usd",
    payment_method_types: ["card"]
  });
  res.json({clientSecret: paymentIntent.client_secret});
});

module.exports = router;
