// To create model we follow some steps
// step1 : require mangoose
const mongoose = require("mongoose");
// step 2: create mangoose schema (structure of a user)
// step3: create a model
const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: { 
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    likedsongs: {
        // we will changee this to array  later
        type: String,
        default: "",
    },
    likedplaylist:{
        // we will changee this to array  later
        type: String,
        default: "",
    },
    suscribedArtist: {
        // we will changee this to array  later
        type: String,
        default: "",
    },
});
 const UserModel = mongoose.model("User",User);

 module.exports = UserModel; 
