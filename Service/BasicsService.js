const Basics = require('../Models/BasicsModel');
const User = require('../Models/UserModel');

const getAllBasics = async () => {
  try {
    return await Basics.find();
  } catch (err) {
    throw new Error(err.message);
  }
};

const createBasic = async (title, content) => {
  try {
    const newBasic = new Basics({ title, content });
    await newBasic.save();
    return newBasic;
  } catch (err) {
    throw new Error(err.message);
  }
};

const completeBasics = async (user) => {
  try {
    user.basicsCompleted = true;

    // Update user progress
    user.progress = calculateProgress(user);
    await user.save();
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const calculateProgress = (user) => {
  const totalSections = 3; // basic, intermediate, advanced
  let completedSections = 0;

  if (user.basicsCompleted) completedSections += 1;
  if (user.intermediateCompleted) completedSections += 1;
  if (user.advancedCompleted) completedSections += 1;

  return (completedSections / totalSections) * 100;
};

module.exports = { getAllBasics, createBasic, completeBasics };
