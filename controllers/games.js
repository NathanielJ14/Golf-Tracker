const Game = require('../models/game');

module.exports.index = async (req, res) => {
    try {
        // Check if the user is authenticated
        if (!req.isAuthenticated()) {
            req.flash('error', 'You need to be logged in to view your games.');
            return res.redirect('/login');
        }

        const user = req.user;
        const games = await Game.find({ author: user._id });
        res.render('games/index', { games, user });
    } catch (err) {
        console.error(err);
        req.flash('error', 'An error occurred while fetching games');
        res.redirect('/games');
    }
};

module.exports.renderNewForm = (req, res) => {
    res.render('games/new');
}

module.exports.createGame = async (req, res, next) => {
    const game = new Game(req.body.game);
    game.author = req.user._id;
    await game.save();
    req.flash('success', 'Successfully made a new game!');
    res.redirect(`/games`);
}

module.exports.showGame = async (req, res) => {
    const game = await Game.findById(req.params.id);

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
    res.render('games/edit', { game });
}

module.exports.updateGame = async (req, res) => {
    const { id } = req.params;
    const game = await Game.findByIdAndUpdate(id, { ...req.body.game });
    await game.save();
    req.flash('success', 'Successfully updated your game!');
    res.redirect(`/games`);
}

module.exports.deleteGame = async (req, res) => {
    const { id } = req.params;
    await Game.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted your game!');
    res.redirect('/games');
}