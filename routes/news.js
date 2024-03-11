const express = require('express');
const router = express.Router();
const passport = require('passport');
const newsController = require('../controllers/news_controller');

router.get('/topHeadLine', newsController.topHeadLine);
router.get('/search/everyThing', newsController.everyThing);
router.get('/search/sources', newsController.sources);
module.exports = router;