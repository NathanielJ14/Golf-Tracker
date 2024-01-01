const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    course: String
});

module.exports = mongoose.model('Game', GameSchema);
