const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

const schema = new Schema({
  author: {
    type: ObjectId,
    ref: "User", // This refers to the 'User' model
  },
  authorName: String,
  data: Buffer,
  created: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: ObjectId,
      ref: "User", // This refers to the 'User' model
    },
  ],
  content: String,
});

module.exports = mongoose.model("Post", schema);
