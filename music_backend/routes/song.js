const express = require("express");
const router = express.Router();
const passport = require("passport");

const song = require("../models/Song");
const User = require("../models/User");


router.post("/create", passport.authenticate("jwt",{session:false}),
async (req, res) => {
    // req.user gets the user because of passport.authenticate
    const {name, thumbnail,track} = req.body;
    if(!name||!thumbnail || !track){
        return res 
        .status(301)
        .json({err:"Insufficient details to create song."});
    }
    const artist = req.user._id;
    const songDetails ={name, thumbnail, track, artist};
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
});

// Get router to get all song I have published.
router.get("/get/mysongs",passport.authenticate("jwt", {session:false}),
async(req, res) =>{
    const currentUser = req.user;
    // We need to get all song where artist id == currentUser._id
    const song = await song.find({artist: req.user._id});
    return res.status(200).json({data:song});
    
}
);

// Get route to get all song any artist has published 
// I will send the artist id and I want to see all song that artist has published .
router.get(
    "/get/artist",
    passport.authenticate("jwt", {session:false}),
    async (req,res) => {
        const {artistId} = req.body;
        // We can check if the aetist does not exist
        const artist = await User.find({_id: artistId});
        if(!artist){
            return res.status(301).json({err:"Artist does not exist"});
        }

        const song = await Song.find({artist: artistId});
        return res.status(200).json({data:song});
    }
);
// Get route to  get a single song by name 
router.get(
    "/get/songname",
    passport.authenticate("jwt",{session:false}),
    async (req,res) =>{
        const {songName} = req.body;
         // name:songName --->exact name matching . Vanilla, vanila.
         // Pattern matching instead of direct name matching.
        const song = await Song.find({name: songName});
        return res.status(200).json({data: songs});
    }
);
module.exports = router;