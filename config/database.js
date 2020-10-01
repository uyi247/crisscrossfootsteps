const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

/* mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.once("connected", () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
 */
