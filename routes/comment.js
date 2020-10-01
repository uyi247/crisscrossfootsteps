const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/comment.js");

router.post("/", ctrl.create);
router.get("/", ctrl.getComments);

module.exports = router;
