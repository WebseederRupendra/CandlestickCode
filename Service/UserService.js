const crypto = require("crypto");
const nodemailer = require("nodemailer");

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent');
  } catch (error) {
    console.error('Error sending OTP email:', error);
  }
};

const createUser = async (email, password, number) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const otp = generateOTP();
  const newUser = new User({ email, password: hashedPassword, number, otp });
  await newUser.save();
  await sendOtpEmail(email, otp);
  return newUser;
};

const verifyUserOtp = async (email, otp) => {
  console.log('email', email);
  console.log('otp', otp);
  
  const user = await User.findOne({ email });
  console.log('user find', user.otp)
  if (user && user.otp == otp) {
    console.log('woek')
    user.otp = "";
    await user.save();
    return true;
  }
  return false;
};

const loginUser = async (email, password, secret, expiresIn) => {
  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return { error: "Invalid login credentials" };
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { error: "Invalid login credentials" };
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id.toString() }, secret, { expiresIn });
    return { token };
  } catch (error) {
    throw new Error(error.message);
  }
};
const updateOtpForUser = async (user, otp) => {
  user.otp = otp;
  await user.save();
  await sendOtpEmail(user.email, otp);
};

const updateUserPassword = async (user, newPassword) => {
  user.password = await bcrypt.hash(newPassword, 10);
  user.otp = "";
  await user.save();
};

module.exports = {createUser, generateOTP, sendOtpEmail,verifyUserOtp,loginUser,updateOtpForUser,updateOtpForUser,updateUserPassword };
