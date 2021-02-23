const {Router} = require("express");
const { addMovie } = require("../controllers/Movie")
const movieRouter = Router();
// const { auth } = require("../middleware/index")


movieRouter.post("/movie/add", addMovie);




module.exports = {
    movieRouter,
}

