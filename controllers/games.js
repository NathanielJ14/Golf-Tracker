const Game = require('../models/game');

module.exports.index = async (req, res) => {
    const games = await Game.find({});
    res.render('games/index', { games });
}

module.exports.renderNewForm = (req, res) => {
    res.render('games/new');
}

module.exports.createGame = async (req, res, next) => {

    const game = new Game(req.body.game);
    await campground.save();
    req.flash('success', 'Successfully made a new Game!');
    res.redirect(`/games/${game._id}`)
}

module.exports.showGame = async (req, res) => {
    if (!game) {
        req.flash('error', 'Cannot find that Game!');
        return res.redirect('/games');
    }
    res.render('games/show', { game });
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const game = await Game.findById(id);
    if (!game) {
        req.flash('error', 'Cannot find that game!');
        return res.redirect('/games');
    }
    res.render('games/edit', { games });
}

module.exports.updateGame = async (req, res) => {
    const { id } = req.params;
    const game = await Game.findByIdAndUpdate(id, { ...req.body.game });
    await campground.save();
    req.flash('success', 'Successfully updated your game!');
    res.redirect(`/games/${game._id}`);
}

module.exports.deleteGame = async (req, res) => {
    const { id } = req.params;
    await Game.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted your game!');
    res.redirect('/games');
}