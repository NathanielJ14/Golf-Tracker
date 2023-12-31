const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Setting up game db
const GameSchema = new Schema({
    course: String,
    date: Date,
    numberOfHoles: {
        type: Number,
        enum: [9, 18],
        required: true,
    },
    scores: {
        type: [{
            holeNumber: {
                type: Number,
                required: true,
            },
            score: {
                type: Number,
                required: true,
            },
        }],
    },
});


GameSchema.virtual('properties.popUpMarkup').get(function () {
    return `
        <strong><a href="/games/${this._id}">${this.course}</a></strong>
        <p>${this.date}</p>
    `;
});


module.exports = mongoose.model('Game', GameSchema);