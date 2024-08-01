const express = require('express');
const {addBearishCandlestick,getBearishCandlesticks,addBullishCandlestick,getBullishCandlesticks} = require('../Controllers/BearishController');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.post('/bearish', authMiddleware, addBearishCandlestick);
router.get('/bearish', getBearishCandlesticks);

router.post('/bullish', authMiddleware, addBullishCandlestick);
router.get('/bullish', getBullishCandlesticks);

module.exports = router;
