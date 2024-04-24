const express = require("express");
const router = express.Router();
const multer = require("multer");

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Where files should be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keeping original file name
  },
});
const upload = multer({ storage: storage });

// Handle POST request with image upload
router.post("/posts/upload", upload.single("image"), (req, res) => {
  const formData = {
    name: req.body.name,
    type: req.file.mimetype,
    uri: req.file.buffer.toString("base64"),
  };

  // Do something with formData
  console.log(formData);

  res.sendStatus(200);
});

// Error handling middleware
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error("Multer error:", err);
    return res.status(500).send("An error occurred while uploading the file.");
  }

  next();
});

module.exports = router;
