const Quiz = require('../Models/QuizModel');
const User = require('../Models/UserModel');

const createQuiz = async (quizData) => {
  const newQuiz = new Quiz(quizData);
  return newQuiz.save();
};

const getQuizById = async (id) => {
  return Quiz.findById(id);
};

const updateQuizById = async (id, updateData) => {
  return Quiz.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteQuizById = async (id) => {
  return Quiz.findByIdAndDelete(id);
};

const completeQuiz = async (user) => {
  user.quizCompleted = true;
  if (user.currentLevel === 'basic') {
    user.currentLevel = 'intermediate';
  } else if (user.currentLevel === 'intermediate') {
    user.currentLevel = 'advanced';
  }
  await user.save();
  return { message: 'Quiz completed and level updated', currentLevel: user.currentLevel };
};

module.exports = {
  createQuiz,
  getQuizById,
  updateQuizById,
  deleteQuizById,
  completeQuiz,
};
