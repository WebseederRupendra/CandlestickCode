const express = require('express');
const router = new express.Router();
const fundamentalCandlestickController = require('../Controllers/FundalmentalAnalysisController');

// Create a new fundamental candlestick
router.post('/fundamentalCandlesticks', fundamentalCandlestickController.createFundamentalCandlestick);

// Get all fundamental candlesticks
router.get('/fundamentalCandlesticks', fundamentalCandlestickController.getFundamentalCandlesticks);

// Update a fundamental candlestick by ID
router.patch('/fundamentalCandlesticks/:id', fundamentalCandlestickController.updateFundamentalCandlestick);

// Delete a fundamental candlestick by ID
router.delete('/fundamentalCandlesticks/:id', fundamentalCandlestickController.deleteFundamentalCandlestick);

module.exports = router;
