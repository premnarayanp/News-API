const express = require('express');
const router = express.Router();
const passport = require('passport');
const newsController = require('../controllers/news_controller');

router.get('/topHeadLine', passport.authenticate('jwt', { session: false }), newsController.topHeadLine);
router.get('/search/everyThing', passport.authenticate('jwt', { session: false }), newsController.everyThing);
router.get('/search/sources', passport.authenticate('jwt', { session: false }), newsController.sources);
module.exports = router;