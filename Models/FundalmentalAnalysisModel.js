const mongoose = require('mongoose');

const FundamentalCandlestickSchema = new mongoose.Schema({
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

const FundamentalCandlestick = mongoose.model('FundamentalCandlestick', FundamentalCandlestickSchema);

module.exports = FundamentalCandlestick;
