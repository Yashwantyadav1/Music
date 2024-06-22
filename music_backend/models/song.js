// To create model we follow some steps
// step1 : require mangoose
const mongoose = require("mangoose");
// step 2: create mangoose schema (structure of a user)
// step3: create a model
const Song = new mangoose.schema({
    name: {
        type: string,
        required: true,
    }, 
    thumbnail:{
        type: string,
        required: true,
    },
    track: {
        type: string,
        required: true,
    },
    artist: {
        type: mangoose.Type.objectId,
        ref: "user",
    },
});
 const SongModel = mongoose.model("Song",Song);

 module.exports = SongModel; 
