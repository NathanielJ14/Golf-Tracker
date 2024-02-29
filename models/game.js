const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//DB schema for game
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
    hole10: { type: Number, default: null },
    hole11: { type: Number, default: null },
    hole12: { type: Number, default: null },
    hole13: { type: Number, default: null },
    hole14: { type: Number, default: null },
    hole15: { type: Number, default: null },
    hole16: { type: Number, default: null },
    hole17: { type: Number, default: null },
    hole18: { type: Number, default: null },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = mongoose.model('Game', GameSchema);
