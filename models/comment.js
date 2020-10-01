const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;
const commentSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: "User" },
  text: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
