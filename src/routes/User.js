const {Router} = require("express");
const { createUser, logIn } = require("../controllers/User")
const userRouter = Router();
const { hashPassword, auth } = require("../middleware/index")


userRouter.post("/users", hashPassword,  createUser);
userRouter.post("/login", logIn);


module.exports = {
    userRouter,
}