const mongoose = require("mongoose");

//user schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;