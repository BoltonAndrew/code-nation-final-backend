const { User } = require("../models/Users")

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const token = await user.generateAuthToken()
        const savedUser = await user.save();
        res.status(201).send({savedUser, token});
    } catch (error) {
        if(error.code == 11000) {
            res.status(500).send({messages: "the email & userName adress already exist!!"});
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

