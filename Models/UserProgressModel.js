const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'User'
  },
  basicCompleted: {
    type: Boolean,
    default: false
  },
  intermediateCompleted: {
    type: Boolean,
    default: false
  },
  advancedCompleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const UserProgress = mongoose.model('UserProgress', userProgressSchema);

module.exports = UserProgress;
