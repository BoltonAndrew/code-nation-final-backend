const { Movie } = require("../models/Movies")


exports.addMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        const savedMovie = await movie.save();
        res.status(201).send({savedMovie});
    } catch (error) {
        if(error.code == 11000) {
            res.status(500).send({messages: "Movie is already in database"});
        } else {
            console.log(error)
            res.status(500).send({messages: "Could not connect"});
        }
    }
};
