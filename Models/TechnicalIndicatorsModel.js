const mongoose = require('mongoose');

const TechnicalCandlestickSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const TechnicalCandlestick = mongoose.model('TechnicalCandlestick', TechnicalCandlestickSchema);

module.exports = TechnicalCandlestick;
