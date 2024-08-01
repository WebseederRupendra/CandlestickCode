const technicalIndicatorService = require('../Service/TechnicalIndicatorService');

// Create a new technical indicator
const createTechnicalIndicator = async (req, res) => {
    try {
        const technicalIndicator = await technicalIndicatorService.createTechnicalIndicator(req.body);
        res.status(201).send(technicalIndicator);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all technical indicators
const getTechnicalIndicators = async (req, res) => {
    try {
        const technicalIndicators = await technicalIndicatorService.getTechnicalIndicators();
        res.status(200).send(technicalIndicators);
    } catch (error) {
        res.status(500).send(error);
    }
};


// Update a technical indicator by ID
const updateTechnicalIndicator = async (req, res) => {
    try {
        const technicalIndicator = await technicalIndicatorService.updateTechnicalIndicator(req.params.id, req.body);
        if (!technicalIndicator) {
            return res.status(404).send();
        }
        res.status(200).send(technicalIndicator);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a technical indicator by ID
const deleteTechnicalIndicator = async (req, res) => {
    try {
        const technicalIndicator = await technicalIndicatorService.deleteTechnicalIndicator(req.params.id);
        if (!technicalIndicator) {
            return res.status(404).send();
        }
        res.status(200).send(technicalIndicator);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createTechnicalIndicator,
    getTechnicalIndicators,
    updateTechnicalIndicator,
    deleteTechnicalIndicator
};
