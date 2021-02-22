const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
userName: {
    type: String,
    required: true,
    unique: true,
},
firstName: {
    type: String,
    required: true
},
lastName: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true,
    unique: true,
},
password: {
    type: String,
    required: true
},
friends: [
    {type: String}
],
acceptedMovies: [
    {type: String}
],
rejectedMovies: [
    {type: String}
],
watchedMovies: [
    {type: String}
],
tokens: [{token: {type: String}}]
}, {timestamps: true});

userSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
}

userSchema.statics.findByCredentials = async(email, password)=> {
    const user = await User.findOne({email: email})
    if(!user) {
        throw new Error("User not found!")
    }
    const c = await bcrypt.compare(password, user.password)
    if(!c) {
        throw new Error("Password not match!")
    }
    return user;
}

userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({_id: this._id}, process.env.SECRET, {});
    this.tokens.push({ token });
    await this.save();
    return token;
}

const User = mongoose.model("User", userSchema)

module.exports = {
    User
}