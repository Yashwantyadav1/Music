// To create model we follow some steps
// step1 : require mangoose
const mongoose = require("mongoose");
// step 2: create mangoose schema (structure of a user)
// step3: create a model
const Song = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    thumbnail:{
        type: String,
        required: true,
    },
    track: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
});
 const SongModel = mongoose.model("Song",Song);

 module.exports = SongModel; 
