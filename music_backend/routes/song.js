const express = require("express");
const router = express.Router();
const passport = require("passport");
const song = require("../models/song");


router.post("/create",passport.authenticate("user"),async (req,res) =>{
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
module.exports = router;