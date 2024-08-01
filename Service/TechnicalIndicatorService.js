const TechnicalIndicator = require('../Models/TechnicalIndicatorsModel');

// Create a new technical indicator
const createTechnicalIndicator = async (data) => {
    const technicalIndicator = new TechnicalIndicator(data);
    return await technicalIndicator.save();
};

// Get all technical indicators
const getTechnicalIndicators = async () => {
    return await TechnicalIndicator.find();
};

// Update a technical indicator by ID
const updateTechnicalIndicator = async (id, data) => {
    return await TechnicalIndicator.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

// Delete a technical indicator by ID
const deleteTechnicalIndicator = async (id) => {
    return await TechnicalIndicator.findByIdAndDelete(id);
};

module.exports = {
    createTechnicalIndicator,
    getTechnicalIndicators,
    updateTechnicalIndicator,
    deleteTechnicalIndicator
};
