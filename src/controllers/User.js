const { User } = require("../models/Users")

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const token = await user.generateAuthToken()
        const savedUser = await user.save();
        res.status(201).send({savedUser, token});
    } catch (error) {
        if(error.code == 11000) {
            res.status(500).send({messages: "Email adress or user name already exist!!"});
        } else {
            res.status(500).send({messages: "Could not connect"});
        }
    }
};

exports.logIn = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken()
        res.status(200).send({user, token});
    } catch (error) {
        console.log(error)
        res.status(400).send({message: "unable to log in"});
    }
};

exports.getMyProfile = async(req,res) => {
    res.status(200).send(req.user)
}

exports.logOut = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((tokenObj)=>{
            return tokenObj.token !== req.token
        });
        await req.user.save();
        res.status(200).send({message: "Succesfully logged out"})
        
    } catch (error) {
        res.status(500).send({message: "unable to log you out!"})
    }
}

exports.updateUser = async (req, res) => {
    try {
        const query = {_id: `${req.user._id}`}
        const updatedUser = await User.findOneAndUpdate(query, req.body, { new: true} );
        res.status(200).send({messgae: `User succesfully updated!`})
    } catch (error) {
        res.status(404).send({message: "Couldn't update!"})
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.user._id
        const user = await User.findById(userId)
        await user.deleteOne();
        await req.user.remove();
        res.status(200).send({message: `User with the name -${user.name}- is succesfully deleted`})
    } catch (error) {
        res.status(500).send({message: "user could not be deleted"})
    }
};
