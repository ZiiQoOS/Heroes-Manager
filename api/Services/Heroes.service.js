const Hero = require("../Models/Hero.model");
const mongoose = require("mongoose");
const Rating = require("../Models/Rating.model");


class HeroessService {

  static async findHeroes(page, limit, orderBy) {
    const heroes = Hero.find()
      .populate({
        path: 'ratings',
        populate: {
          path: 'user',
          model: 'User'
        }
      })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ [orderBy]: 1 });

    return heroes;
  }

  static async findHeroById(heroId) {
    const hero = await Hero.findById(heroId);
    return hero;
  }

  static async upsertHero(hero) {
    var filter = { _id: hero.id ?? new mongoose.Types.ObjectId() };
    const newHero = await Hero.create(hero);
    return newHero;
  }


}

module.exports = HeroessService;