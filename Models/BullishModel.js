const mongoose = require('mongoose');

const bullishCandlestickSchema = new mongoose.Schema({
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

const BullishCandlestick = mongoose.model('BullishCandlestick', bullishCandlestickSchema);

module.exports = BullishCandlestick;
