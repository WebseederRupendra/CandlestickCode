// routes/basicsRoutes.js
const express = require('express');
const router = express.Router();
const { getAllBasics, createBasic, completeBasics } = require('../Controllers/BasicsController');
const authMiddleware = require('../middlewares/auth');

router.get('/basics', authMiddleware, getAllBasics);
router.post('/basics', authMiddleware, createBasic);
router.post('/basics/complete', authMiddleware, completeBasics);

module.exports = router;
