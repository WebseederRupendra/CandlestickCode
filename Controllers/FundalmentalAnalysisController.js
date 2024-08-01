const fundamentalCandlestickService = require('../Service/FundamentalAnalysisService');

// Create a new fundamental candlestick
const createFundamentalCandlestick = async (req, res) => {
    try {
        const fundamentalCandlestick = await fundamentalCandlestickService.createFundamentalCandlestick(req.body);
        res.status(201).send(fundamentalCandlestick);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all fundamental candlesticks
const getFundamentalCandlesticks = async (req, res) => {
    try {
        const fundamentalCandlesticks = await fundamentalCandlestickService.getFundamentalCandlesticks();
        res.status(200).send(fundamentalCandlesticks);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a fundamental candlestick by ID
const updateFundamentalCandlestick = async (req, res) => {
    try {
        const fundamentalCandlestick = await fundamentalCandlestickService.updateFundamentalCandlestick(req.params.id, req.body);
        if (!fundamentalCandlestick) {
            return res.status(404).send();
        }
        res.status(200).send(fundamentalCandlestick);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a fundamental candlestick by ID
const deleteFundamentalCandlestick = async (req, res) => {
    try {
        const fundamentalCandlestick = await fundamentalCandlestickService.deleteFundamentalCandlestick(req.params.id);
        if (!fundamentalCandlestick) {
            return res.status(404).send();
        }
        res.status(200).send(fundamentalCandlestick);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createFundamentalCandlestick,
    getFundamentalCandlesticks,
    updateFundamentalCandlestick,
    deleteFundamentalCandlestick
};
