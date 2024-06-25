const express = require("express");
const router = express.Router();
const passport = require("passport");
const song = require("../models/song");


router.post("/create",passport.authenticate("jwt",{session:false}),
async (req,res) => {
    // req.user gets the user because of passport.authenticate
    const {name, thumbnail,track} = req.body;
    if(!name||!thumbnail || !track){
        return res 
        .status(301)
        .json({err:"Insufficient details to create song."});
    }
    const artist = req.user._id;
    const songDetails ={name, thumbnail, track, artist};
    const createdsong = awaitsong.create(songDetails);
    return res.status(200).json(createdsong);
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
module.exports = router;