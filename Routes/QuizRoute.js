const express = require("express");
const router = express.Router();
const { createQuiz, getQuizById, updateQuizById, deleteQuizById, completeQuiz } = require('../Controllers/QuizController');
const userprogress = require("../middlewares/UserProgressMiddleware");
const auth = require("../middlewares/auth"); // Assuming you have an authentication middleware

// Quiz routes
router.post('/quiz', createQuiz);
router.get('/quiz/:id', getQuizById);
router.put('/quiz/:id', updateQuizById);
router.delete('/quiz/:id', deleteQuizById);
router.post('/quiz/complete', auth, completeQuiz); // Protecting the route with auth middleware

module.exports = router;
