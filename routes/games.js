const express = require('express');
const router = express.Router();
const games = require('../controllers/games');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, validateGame, isAuthor } = require('../middleware');


//All campground routes
router.route('/')
    .get(catchAsync(games.index))
    .post(isLoggedIn, catchAsync(async (req, res) => {
        console.log('Submitted Form Data:', req.body);
        validateGame(req, res, () => { });
        await games.createGame(req, res);
    }));


router.get('/new', isLoggedIn, games.renderNewForm);

router.route('/:id')
    .get(catchAsync(games.showGame))
    .put(isLoggedIn, isAuthor, validateGame, catchAsync(games.updateGame))
    .delete(isLoggedIn, isAuthor, catchAsync(games.deleteGame));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(games.renderEditForm));

module.exports = router;