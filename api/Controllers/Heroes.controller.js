const Hero = require('../Models/Hero.model');
const HeroesService = require('../Services/Heroes.service');
const RatingsService = require('../Services/Ratings.service');


exports.getHeroes = async (req, res, next) => {
  try {
    const { page = 1, limit = 5, orderBy = 'name' } = req.query;
    const heroes = await HeroesService.findHeroes(page, limit, orderBy);
    const heroesCount = await Hero.countDocuments();
    const heroesWithRatings = heroes.map((hero) => {
      return {
        _id: hero._id,
        name: hero.name,
        description: hero.description,
        powers: hero.powers,
        user: hero.user,
        rating: hero.ratings.find((rating) => remvoeExtraStringFromId(rating.user._id) === req.user.user_id)?.value || 0
      }
    });
    res.status(200).send({ heroesWithRatings, heroesCount });
  } catch (err) {
    next(err);
  }
};


exports.getHeroById = async (req, res, next) => {
  try {
    const heroes = await HeroesService.findHeroById();
    res.status(200).send(heroes);
  } catch (err) {
    next(err);
  }
};

exports.upsertHero = async (req, res, next) => {
  try {
    req.body.hero.user = req.user.user_id;
    const newHero = await HeroesService.upsertHero(req.body.hero);
    res.status(201).send(newHero);
  } catch (err) {
    next(err);
  }
}

exports.rateHero = async (req, res, next) => {
  try {
    const rating = req.body.rating;
    rating.user = req.user.user_id; // the auth user
    rating.hero = req.params.heroId;
    const newRating = await RatingsService.upsertRating(rating);
    res.status(200).send(newRating);
  } catch (err) {
    next(err);
  }
};


// Utils
const remvoeExtraStringFromId = (id) => {
  return id.toString().replace(/ObjectId\("(.*)"\)/, "$1");
};