const Comment = require("../models/comment.js");

module.exports = {
  create,
  getComments,
};

async function create(req, res) {
  const comment = new Comment(req.body);
  console.log(comment);

  try {
    const doc = await comment.save();
    res.json(doc);
  } catch (err) {
    console.log(err);
    let msg = err.message;
    res.status(400).json({ err: msg.substr(msg.indexOf(":")) });
  }
}

async function getComments(req, res) {
  console.log("comment listing ...");
  Comment.find({}, (err, docs) => {
    // if(err)
    //   return res.status(401).json(err);
    console.log(docs);
    // res.json(docs);
  });
}
