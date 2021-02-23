const {Router} = require("express");
const { addMovie, getMovie, getAllMovies, updateMovie, deleteMovie } = require("../controllers/Movie")
const movieRouter = Router();
const { auth } = require("../middleware/index")

//CRUD movies
movieRouter.post("/movie/add", auth, addMovie);
movieRouter.get("/movie",auth, getMovie);
movieRouter.get("/moviesAll", auth, getAllMovies);
movieRouter.patch("/movie", auth, updateMovie);
movieRouter.delete("/movie", auth,deleteMovie);





module.exports = {
    movieRouter,
}

