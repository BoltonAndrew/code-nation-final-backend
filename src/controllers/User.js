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


