const {Router} = require("express");
const { addMovie, getMovie, getAllMovies, updateMovie, deleteMovie } = require("../controllers/Movie")
const movieRouter = Router();
// const { auth } = require("../middleware/index")

//CRUD movies
movieRouter.post("/movie/add", addMovie);
movieRouter.get("/movie", getMovie);
movieRouter.get("/moviesAll", getAllMovies);
movieRouter.patch("/movie", updateMovie);
movieRouter.delete("/movie", deleteMovie);





module.exports = {
    movieRouter,
}

