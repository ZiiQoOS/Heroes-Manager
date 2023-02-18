const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeroSchema = new Schema(
    {   // Schema definition
        name: { type: String, default: null },//  Hero name
        description: { type: String, default: null }, // Hero description
        powers: { type: String, default: '' }, // Hero powers
        user: { type: Schema.Types.ObjectId, ref: 'User' }, // User who created the hero 
        ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }]
    },
    {// Collection name
        collection: 'Heroes'
    }
);

module.exports = mongoose.model("Hero", HeroSchema);