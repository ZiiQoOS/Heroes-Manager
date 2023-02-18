const express = require('express');
const router = express.Router();
const ratingsController = require('../Controllers/Ratings.controller');

router.post('/ratings', ratingsController.upsertRating);

module.exports = router;
