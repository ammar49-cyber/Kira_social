const router = require("express").Router();
const Video = require("../models/Video");
const verifyToken = require("../middleware/authMiddleware");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_KEY,
  api_secret:process.env.CLOUDINARY_SECRET
});

const upload = multer({ dest:"uploads/" });

// Upload video
router.post("/upload", verifyToken, upload.single("file"), async (req,res)=>{
  const result = await cloudinary.uploader.upload(req.file.path, { resource_type:"video" });
  const video = new Video({
    user:req.user.id,
    title:req.body.title,
    description:req.body.description,
    url:result.secure_url,
    type:req.body.type || "short"
  });
  await video.save();
  res.json(video);
});

// Get videos
router.get("/", async (req,res)=>{
  const videos = await Video.find().sort({createdAt:-1}).populate("user","username");
  res.json(videos);
});

// Like video
router.post("/like/:id", verifyToken, async (req,res)=>{
  const video = await Video.findById(req.params.id);
  video.likes+=1;
  await video.save();
  res.json(video);
});

module.exports = router;
