const express = require("express");
const passport = require("passport");
const playlist = require("../models/playlist");

const router = express.Router();

// Route 1: Create a playlist
router.post(
    "/create",
     passport.authenticate("jwt", {session:false}),
async (req, res) => {
    const currentUser =req.user;
    const {name,thumbnail,song} =req.body;
    if (!name || !thumbnail || !songs) {
        return res.status(301).json({err:"Insufficient data"});
    }
    const playlistData = {
        name,
        thumbnail,
        songs,
        owner:currentUser._id,
        collaborators:[],

    };
    const playlist = await playlist.create(playlistData);
    return res.status(200).json(playlist);

}

);

// Route 2: Get a playlist by ID
// We will get the playlist ID as a route parameter and we will return tec playlist having that ID.
// somethings 1 /somethings 2/ somethings 3 ---> exact match
// somethings1/ somethings2/somethings4 ----> this will not call the api on the previus line. 
// If we are doing /playlist /get /:playlist Id (focus on teh:) -->this means that playlistId is now a variable to which we can assign any value .
// If you call anything  of the formate /playlist/get/asdvniuen (asdvniuen can be anything this API called  )
router.get(
    "/get/:playlistId",
    passport.authenticate("jwt",{session:false}),
    async(req,res) => {
        // this concept is called req.params
        const playlistId = req.params.playlistId;
        // i need to find a playlist with the Id = playlistId 
        const  playlist = await playlist.findOne ({_id:playlistId});
        if(!playlist){
            return res.status(301).json({err:"Invalid ID"});    
        }
        return res.status(200).json(playlist);
    }
);
module.exports = router