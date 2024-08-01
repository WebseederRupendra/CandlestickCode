const FundamentalCandlestick = require('../Models/FundalmentalAnalysisModel');

// Create a new fundamental candlestick
const createFundamentalCandlestick = async (data) => {
    const fundamentalCandlestick = new FundamentalCandlestick(data);
    return await fundamentalCandlestick.save();
};

// Get all fundamental candlesticks
const getFundamentalCandlesticks = async () => {
    return await FundamentalCandlestick.find();
};

// Update a fundamental candlestick by ID
const updateFundamentalCandlestick = async (id, data) => {
    return await FundamentalCandlestick.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

// Delete a fundamental candlestick by ID
const deleteFundamentalCandlestick = async (id) => {
    return await FundamentalCandlestick.findByIdAndDelete(id);
};

module.exports = {
    createFundamentalCandlestick,
    getFundamentalCandlesticks,
    updateFundamentalCandlestick,
    deleteFundamentalCandlestick
};
