const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingSchema = new Schema(
    {   // Schema definition
        hero:   {type: Schema.Types.ObjectId, ref: 'Hero'}, // Rated hero
        user:   {type: Schema.Types.ObjectId, ref: 'User'}, // User giving the rating
        value: { type: Number, default: 0 } // Rating value
    },
    {// Collection name
        collection: 'Ratings'
    }
);

module.exports = mongoose.model("Rating", RatingSchema);