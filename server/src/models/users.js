const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String },
    email: { type: String },
    username: { type: String },
    password: { type: String },
  },
  { collection: "users" }
);
module.exports = mongoose.model("Users", usersSchema);
