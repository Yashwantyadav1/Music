// To create model we follow some steps
// step1 : require mangoose
const mongoose = require("mongoose");
// step 2: create mangoose schema (structure of a user)
// step3: create a model
const playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    owner: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "song",

        },
    ],
    collaborators: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
    ],

});
const playlistModel = mongoose.model("playlist", playlist);

module.exports = playlistModel; 
