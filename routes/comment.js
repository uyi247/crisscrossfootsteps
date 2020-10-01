const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/comment.js");

router.post("/", ctrl.create);
router.get("/", ctrl.getComments);
router.put("/:id", ctrl.editComment);
router.delete("/:id", ctrl.deleteComment)

module.exports = router;
