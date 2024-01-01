const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    course: String,
    date: Date,
    numberOfHoles: {
        type: Number,
        enum: [9, 18],
    },
    hole1: Number,
    hole2: Number,
    hole3: Number,
    hole4: Number,
    hole5: Number,
    hole6: Number,
    hole7: Number,
    hole8: Number,
    hole9: Number,
    hole10: { type: Number, default: 0 },
    hole11: { type: Number, default: 0 },
    hole12: { type: Number, default: 0 },
    hole13: { type: Number, default: 0 },
    hole14: { type: Number, default: 0 },
    hole15: { type: Number, default: 0 },
    hole16: { type: Number, default: 0 },
    hole17: { type: Number, default: 0 },
    hole18: { type: Number, default: 0 },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = mongoose.model('Game', GameSchema);
