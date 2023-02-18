const RatingsService = require('../Services/Ratings.service');


exports.upsertRating = async (req, res, next) => {
  try {
    const rating = req.body.rating;
    const newRating = await RatingsService.upsertRating(rating);
    res.status(200).send(newRating);
  } catch (err) {
    next(err);
  }
};