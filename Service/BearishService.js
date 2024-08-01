const BearishCandlestick = require('../Models/BearishModel');
const BullishCandlestick = require('../Models/BullishModel');

const addBearishCandlestick = async (name, description, imageUrl) => {
  try {
    const candlestick = await BearishCandlestick.create({ name, type: 'bearish', description, imageUrl });
    return candlestick;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getBearishCandlesticks = async () => {
  try {
    return await BearishCandlestick.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

const addBullishCandlestick = async (name, description, imageUrl) => {
  try {
    const candlestick = await BullishCandlestick.create({ name, type: 'bullish', description, imageUrl });
    return candlestick;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getBullishCandlesticks = async () => {
  try {
    return await BullishCandlestick.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  addBearishCandlestick,
  getBearishCandlesticks,
  addBullishCandlestick,
  getBullishCandlesticks
};
