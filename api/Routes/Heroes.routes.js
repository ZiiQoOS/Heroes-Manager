const express = require('express');
const router = express.Router();
const heroesController = require('../Controllers/Heroes.controller');

router.get('/heroes', heroesController.getHeroes);
router.post('/heroes', heroesController.upsertHero);
router.post('/hero/:heroId/rating', heroesController.rateHero);

module.exports = router;
