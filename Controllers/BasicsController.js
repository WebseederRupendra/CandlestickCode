const basicsService = require('../Service/BasicsService');

const getAllBasics = async (req, res) => {
  try {
    const basics = await basicsService.getAllBasics();
    res.json(basics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBasic = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newBasic = await basicsService.createBasic(title, content);
    res.status(201).json(newBasic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const completeBasics = async (req, res) => {
  try {
    const user = req.user; // Assuming user is attached to req by authentication middleware
    await basicsService.completeBasics(user);
    res.status(200).json({ message: 'Basics completed', progress: user.progress });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllBasics, createBasic, completeBasics };
