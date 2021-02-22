const {Router} = require("express");
const { createUser } = require("../controllers/User")
const userRouter = Router();

userRouter.post("/users",  createUser);


module.exports = {
    userRouter,
}