const Rating = require("../Models/Rating.model");
const mongoose = require("mongoose");
const Hero = require("../Models/Hero.model");


class RatingessService {

  static async findRatingByUserId(userId) {
    const rating = await Rating.findOne({ user: userId });
    return rating;
  }

  static async findRatingByUserIdAndHeroId(userId, heroId) {
    const rating = await Rating.findOne({ user: userId, hero: heroId });
    return rating;
  }

  static async upsertRating(rating) {
    var filter = { user: rating.user, hero: rating.hero };
    const newRating = await Rating.findOneAndUpdate(filter, rating, { upsert: true, new: true });
    const updatedHero = await Hero.findById(newRating.hero);
    if (!updatedHero.ratings.includes(newRating._id)) {
      updatedHero.ratings.push(newRating._id);
      updatedHero.save();
    }
    return newRating;
  }
}

module.exports = RatingessService;