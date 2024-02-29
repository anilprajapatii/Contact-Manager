const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Enter Username"],
    },
    email: {
      type: String,
      required: [true, "Please Enter the Email Address"],
      unique: [true, "This Email already exist"],
    },
    password: {
      type: String,
      required: [true, "Please Enter the Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
