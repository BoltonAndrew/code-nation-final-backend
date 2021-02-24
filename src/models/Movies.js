const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
movie_id: {
    type: String,
    required: true,
    unique: true,
},
movie_title: {
    type: String,
    required: true,
},
userLikes: [
    {type: String}
],
userRates: [
    {
        userId : {type: String},
        rate: {type: String}
    }
],
posterUrl : {
    type: String
}
}, {timestamps: true});

const Movie = mongoose.model("Movie", movieSchema)

module.exports = {
    Movie
}