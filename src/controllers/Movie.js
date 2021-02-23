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

exports.getMovie = async (req, res) => {
    try {
        const movie = await Movie.find({movie_id: req.body.movie_id});
        res.status(200).send(movie);
    } catch (error) {
        res.status(500).send({message: "Couldn not find the movie"});

    }
}

exports.getAllMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find({});
        res.status(200).send(allMovies);

    } catch (error) {
        res.status(500).send({message: "Couldn load the movies"});

    }
}

exports.updateMovie = async (req, res) => {
    try {
        
        const query = {movie_id: req.body.movie_id}
        const newMovie = req.body;
        const updatedMovie = await Movie.findOneAndUpdate(query, newMovie, { new: true});
        res.status(200).send({messgae: `movie succesfully updated !`})

    } catch (error) {
        res.status(500).send({message: "Couldn update the movie"});
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findOneAndDelete({movie_id: req.body.movie_id});
        res.status(200).send({message: `Movie Deleted`})

    } catch (error) {
        res.status(500).send({message: "Movie couldnt deleted"});
        console.log(error)
    }
}
