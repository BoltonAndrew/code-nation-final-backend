const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/Users");


exports.hashPassword = async(req, res, next) => {
if("password" in req.body) {
    req.body.password = await bcrypt.hash(req.body.password, 8)
}
next();
};

exports.auth = async (req, res, next) => {
try {
    const token = req.header("Authorization").replace("Bearer ", "");
    
    const decoded = jwt.verify(token, process.env.SECRET);
    
    const user = await User.findOne({_id: decoded._id, "tokens.token": token});
    

    if(!user){
        throw new Error()
    }
    req.user = user;
    
    req.token = token;
    console.log('auth successful')
    next();
} catch (error) {
    res.status(401).send({message: "Please log in"});
    }
    
}

