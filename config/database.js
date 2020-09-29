const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});