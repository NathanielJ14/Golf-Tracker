const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    course: String,
    date: Date,
    numberOfHoles: {
        type: Number,
        enum: [9, 18],
        required: true,
    },
    scores: {
        type: [Number],
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});


module.exports = mongoose.model('Game', GameSchema);
