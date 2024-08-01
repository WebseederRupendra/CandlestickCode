const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  basicsCompleted: {
    type: Boolean,
    default: false,
  },
  quizCompleted: {
    type: Boolean,
    default: false,
  },
  currentLevel: {
    type: String,
    enum: ["basic", "intermediate", "advanced"],
    default: "basic",
  },
});

module.exports = mongoose.model("User", userSchema);
