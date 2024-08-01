// controllers/CandlestickController.js
const candlestickService = require('../Service/BearishService');

const addBearishCandlestick = async (req, res) => {
  const { name, description, imageUrl } = req.body;
  try {
    const candlestick = await candlestickService.addBearishCandlestick(name, description, imageUrl);
    res.status(201).json(candlestick);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBearishCandlesticks = async (req, res) => {
  try {
    const candlesticks = await candlestickService.getBearishCandlesticks();
    res.status(200).json(candlesticks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addBullishCandlestick = async (req, res) => {
  const { name, description, imageUrl } = req.body;
  try {
    const candlestick = await candlestickService.addBullishCandlestick(name, description, imageUrl);
    res.status(201).json(candlestick);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBullishCandlesticks = async (req, res) => {
  try {
    const candlesticks = await candlestickService.getBullishCandlesticks();
    res.status(200).json(candlesticks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addBearishCandlestick,
  getBearishCandlesticks,
  addBullishCandlestick,
  getBullishCandlesticks
};
