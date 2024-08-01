const express = require('express');
const router = new express.Router();
const technicalIndicatorController = require('../Controllers/TechnicalIndicatorsController');

// Create a new technical indicator
router.post('/technicalIndicators', technicalIndicatorController.createTechnicalIndicator);

// Get all technical indicators
router.get('/technicalIndicators', technicalIndicatorController.getTechnicalIndicators);

// Update a technical indicator by ID
router.patch('/technicalIndicators/:id', technicalIndicatorController.updateTechnicalIndicator);

// Delete a technical indicator by ID
router.delete('/technicalIndicators/:id', technicalIndicatorController.deleteTechnicalIndicator);

module.exports = router;
