const UserProgress = require('../Models/UserProgressModel');
// const {createuserProgress, getuserProgress,updateuserProgress,deleteuserProgress} = require("../Service/UserProgressService")

// Create new user progress
const createUserProgress = async (req, res) => {
  const { userId, basicCompleted, intermediateCompleted, advancedCompleted } = req.body;

    try {
        let userProgress = await UserProgress.findOne({ userId });

        if (userProgress) {
            // If the user progress already exists, update it
            userProgress.basicCompleted = basicCompleted;
            userProgress.intermediateCompleted = intermediateCompleted;
            userProgress.advancedCompleted = advancedCompleted;
            await userProgress.save();
            res.status(200).json(userProgress);
        } else {
            // If no user progress exists, create a new one
            userProgress = new UserProgress({
                userId,
                basicCompleted,
                intermediateCompleted,
                advancedCompleted
            });
            await userProgress.save();
            res.status(201).json(userProgress);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

// Get user progress by userId
const getUserProgress = async (req, res) => {
  const { userId } = req.params;

  try {
    const userProgress = await UserProgress.findOne({ userId });

    if (!userProgress) {
      return res.status(404).json({ message: 'User progress not found' });
    }

    res.status(200).json(userProgress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update user progress by userId
const updateUserProgress = async (req, res) => {
  const { userId } = req.params;
  const { basicCompleted, intermediateCompleted, advancedCompleted } = req.body;

  try {
    const updatedUserProgress = await UserProgress.findOneAndUpdate(
      { userId },
      { basicCompleted, intermediateCompleted, advancedCompleted },
      { new: true }
    );

    if (!updatedUserProgress) {
      return res.status(404).json({ message: 'User progress not found' });
    }

    res.status(200).json(updatedUserProgress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete user progress by userId
const deleteUserProgress = async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedUserProgress = await UserProgress.findOneAndDelete({ userId });

    if (!deletedUserProgress) {
      return res.status(404).json({ message: 'User progress not found' });
    }

    res.status(200).json({ message: 'User progress deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  createUserProgress,
  getUserProgress,
  updateUserProgress,
  deleteUserProgress
};
