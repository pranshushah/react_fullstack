const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

const User = mongoose.model("Users", userSchema);

module.exports = { User };
