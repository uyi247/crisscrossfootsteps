const User = require("../models/users.js");
const jwt = require("jsonwebtoken");

module.exports = {
  signup,
  login,
};

async function signup(req, res) {
  const user = new User(req.body);
  console.log(user);
  User.findOne({ email: user.email }, async (err, doc) => {
    if (doc !== null) {
      res.status(400).json({ err: "email already in use" });

      return;
    }
    if (user.password.length < 7) {
      res.status(400).json({ err: "Password length is shorter than 7" });
    }

    try {
      await user.save();
      const token = createJWT(user);
      res.json({ token });
    } catch (err) {
      console.log(err);
      let msg = err.message;
      res.status(400).json({ err: msg.substr(msg.indexOf(":")) });
    }
  });
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}
