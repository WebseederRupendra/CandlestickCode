const userprogress = require("../Models/QuizModel")

const checkProgress = (req, res, next) => {
  const user = req.user; 

  if (user.progress.basicsCompleted && user.progress.quizCompleted) {
    if (user.currentLevel === 'basic') {
      user.currentLevel = 'intermediate';
    } else if (user.currentLevel === 'intermediate') {
      user.currentLevel = 'advanced';
    }
    user.save();
  }
  next();
};

module.exports = {checkProgress};
