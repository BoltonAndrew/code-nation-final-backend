const {Router} = require("express");
const { addMovie, getMovie, getAllMovies, updateMovie, deleteMovie, matchedMovies } = require("../controllers/Movie")
const movieRouter = Router();
const { auth } = require("../middleware/index")

//CRUD movies
movieRouter.post("/movie/add", auth, addMovie);
movieRouter.get("/movie",auth, getMovie);
movieRouter.get("/moviesAll", auth, getAllMovies);
movieRouter.patch("/movie", auth, updateMovie);
movieRouter.delete("/movie", auth,deleteMovie);
movieRouter.get("/movie/match", auth, matchedMovies);





module.exports = {
    movieRouter,
}

