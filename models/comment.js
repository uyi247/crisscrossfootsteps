const mongoose = require("mongoose");

//const ObjectId = mongoose.Schema.Types.ObjectId;
const commentSchema = new mongoose.Schema({
  userId: {
    type: String, 
    required: true
  },
  name: {
    type: String, 
    required: true
  },
  text: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
