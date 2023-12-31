const { gameSchema } = require('./schemas');
const ExpressError = require('./utils/ExpressError');
const Game = require('./models/game');

//Authentication login setup
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

//Game validation
module.exports.validateGame = (req, res, next) => {
    const { error } = gameSchema.validate(req.body);

    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

//Authorization author middleware
module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params;
    const game = await Game.findById(id);
    if (!game.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/dashboard`);
    }
    next();
}
