const express = require("express");
const router = express.Router();
const Post = require("../server/picture");
router.post("/upload", async (req, res) => {
  if (!req.body || !req.body.image) {
    return res.status(400).send("No image data received.");
  }

  try {
    const imageData = req.body.image; // Accessing directly from req.body.image

    // Convert Base64 to buffer
    const bufferData = Buffer.from(imageData, "base64");

    const post = new Post({
      author: req.body.id,
      authorName: req.body.author,
      data: bufferData,
      created: Date.now(),
      content: req.body.content,
    });

    await post.save();
    res.status(200).send("Image uploaded successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getposts",async(req,res)=>{
  const result=await Post.find({});
  res.json(JSON.stringify(result));
})


module.exports = router;
