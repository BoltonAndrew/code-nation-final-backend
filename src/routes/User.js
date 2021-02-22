const {Router} = require("express");
const { createUser } = require("../controllers/User")
const userRouter = Router();
const { hashPassword, auth } = require("../middleware/index")


userRouter.post("/users", hashPassword,  createUser);


module.exports = {
    userRouter,
}