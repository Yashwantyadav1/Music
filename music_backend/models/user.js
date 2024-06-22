// To create model we follow some steps
// step1 : require mangoose
const mongoose = require("mangoose");
// step 2: create mangoose schema (structure of a user)
// step3: create a model
const User = new mangoose.schema({
    firstName: {
        type: string,
        required: true,
    },
    lastName: {
        type: string,
        required: false,
    },
    email:{
        type: string,
        required: true,
    },
    username: {
        type: string,
        required: true,
    },
    likedsongs: {
        // we will changee this to array  later
        type: string,
        default: "",
    },
    likedplaylist:{
        // we will changee this to array  later
        type: string,
        default: "",
    },
    suscribedArtist: {
        // we will changee this to array  later
        type: string,
        default: "",
    },
});
 const UserModel = mongoose.model("User",User);

 module.exports = Usermodel; 
