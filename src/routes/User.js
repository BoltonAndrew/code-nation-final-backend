const {Router} = require("express");
const { createUser, logIn, getMyProfile, logOut, updateUser, deleteUser, findUsers, addFriend } = require("../controllers/User")
const userRouter = Router();
const { hashPassword, auth } = require("../middleware/index")


userRouter.post("/users", hashPassword,  createUser);
userRouter.post("/users/finduser", auth, findUsers)
userRouter.post("/users/addfriend", auth, addFriend)

userRouter.post("/users/login", logIn);

userRouter.get("/users/myprofile", auth, getMyProfile);
userRouter.get("/users/logout", auth, logOut);

userRouter.patch("/users/myprofile", auth, hashPassword, updateUser);
userRouter.delete("/users/myprofile", auth, deleteUser);



module.exports = {
    userRouter,
}

