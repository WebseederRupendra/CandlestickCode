const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");
const { generateOTP, sendOtpEmail } = require("../Service/UserService");

const signUpUser = async (req, res) => {
  const { email, password, number } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();
    await sendOtpEmail(email, otp);
    const newUser = new User({ email, password: hashedPassword, number, otp });
    await newUser.save();
    res.status(201).json({ message: "User registered, OTP sent to email" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    user.otp = "";
    await user.save();
    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid login credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid login credentials" });
    }
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
      expiresIn: "30h",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User with this email does not exist" });
    }
    const otp = generateOTP();
    user.otp = otp;
    await user.save();
    await sendOtpEmail(email, otp);
    res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User with this email does not exist" });
    }
    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.otp = "";
    await user.save();
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserEmail = async (req, res) => {
  const { userId, newEmail } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.email = newEmail;
    await user.save();
    res.status(200).json({ message: "Email updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserNumber = async (req, res) => {
  const { userId, newNumber } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.number = newNumber;
    await user.save();
    res.status(200).json({ message: "Number updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { 
  signUpUser, 
  verifyOtp, 
  loginUser, 
  forgotPassword, 
  resetPassword, 
  updateUserEmail, 
  updateUserNumber 
};
