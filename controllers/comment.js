const Comment = require("../models/comment.js");

module.exports = {
  create,
  getComments,
  editComment, deleteComment
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
    res.send(docs);
    // res.json(docs);
  });
}

function editComment(req, res) {
  const commentDetails = req.body;
  const _id = req.params.id;
  Comment.findByIdAndUpdate(
    { _id },
    commentDetails,
    { new: true },
    (err, data) => {
      if (err) {
        res.json({ success: false, err });
      } else {
        res.json({ success: true, msg: "updated succesfully", data });
      }
    }
  );
}

function deleteComment(req, res){
  const _id = req.params.id;
  Comment.findByIdAndRemove({_id}, (err, data) => {
    if (err) {
      res.json({ success: false, err });
    } else {
      res.json({ success: true, msg: "deleted successfully!" });
    }
  })
}
