// To create model we follow some steps
// step1 : require mangoose
const mongoose = require("mangoose");
// step 2: create mangoose schema (structure of a user)
// step3: create a model
const playlist = new mangoose.schema({
    name: {
        type: string,
        required: true,
    }, 
    thumbnail:{
        type: string,
        required: true,
    },
    owner: {
        type: mangoose.Type.objectId,
        ref: "user",
    },
    songs: [{
        type: mongoose.Type.objectId,
        ref: "song",
       
    },
 ],
 collaborators:[
    {
        type: mongoose.Type.objectId,
        ref: "user",
    },
 ],

});
 const playlistModel = mongoose.model("playlist",playlist);

 module.exports = playlistModel; 
