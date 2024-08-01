const mongoose = require('mongoose');

const bearishCandlestickSchema = new mongoose.Schema({
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

const BearishCandlestick = mongoose.model('BearishCandlestick', bearishCandlestickSchema);

module.exports = BearishCandlestick;
