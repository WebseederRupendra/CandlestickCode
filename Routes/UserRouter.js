const express = require('express');
const { signUpUser, verifyOtp, loginUser, forgotPassword, resetPassword,updateUserEmail,updateUserNumber } = require('../Controllers/UserController');


const router = express.Router();

// User Routes
router.post('/signup', signUpUser);
router.post('/verify-otp', verifyOtp);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/reset-email', updateUserEmail);
router.post('/reset-number', updateUserNumber);


module.exports = router;
