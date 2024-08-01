const UserProgress = require('../Models/UserProgressModel');

const createuserProgress = async (userData) => {
  const { userId, basicCompleted, intermediateCompleted, advancedCompleted } = userData;

  const newUserProgress = new UserProgress({
    userId,
    basicCompleted,
    intermediateCompleted,
    advancedCompleted
  });

  return await newUserProgress.save();
};

const getuserProgress = async (userId) => {
  return await UserProgress.findOne({ userId });
};

const updateuserProgress = async (userId, updateData) => {
  const { basicCompleted, intermediateCompleted, advancedCompleted } = updateData;

  return await UserProgress.findOneAndUpdate(
    { userId },
    { basicCompleted, intermediateCompleted, advancedCompleted },
    { new: true }
  );
};

const deleteuserProgress = async (userId) => {
  return await UserProgress.findOneAndDelete({ userId });
};

module.exports = {
  createuserProgress,
  getuserProgress,
  updateuserProgress,
  deleteuserProgress
};
