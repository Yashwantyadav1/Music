const express = require("express");
const passport = require("passport");
const playlist = require("../models/playlist");
const User = require("../models/User");
//const { route } = require("./song");
const song = require("../models/Song");
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
    "/get/playlist/:playlistId",
    passport.authenticate("jwt",{session:false}),
    async(req, res) => {
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

// Route 3: Get all playlist made by an artist 
// get artist/xyz
router.get(
    "/get/artist/:artistId",
    passport.authenticate("jwt",{session:false}),
    async(req, res)=> {
        const artistId = req.params.artistId;

        // We can do this : Check if artist id is given the artist Id exists
        const artist = await User.findOne({_id:artistId});
        if(!artist){
            return res.status(304).json({err:"Invalid Artist ID"});
        }

        const playlist = await playlist.find({owner:artistId});
        return res.status(200).json({data: playlist});
    }
);

// Router 4: Add a song to a playlist
router.post(
    "/add/song",
    passport.authenticate("jwt",{session:false}),
    async (req, res) => {
        const currentUser = req.user;
        const{playlistId, songId} = req.body;
        // Step 0: Get the playlist if valid
        const playlist = await playlist.findOne({_id:playlistId});
        if(!playlist){
            return res.status(304).json({err: "playlist does not exist"});
        }
        // Step 1: Check if currentUser owns the playlist or is a collaborator
        if(
            playlist.owner !=currentUser._id &&
            !playlist.collaborators.includes(currentUser._id)
        ) {
            return res.status(400).json({err:"Not allowed"});
        }
        // Step 2: check if the song is a valid song 
        const song = await song.findOne({_id: songId});
        if(!song){
            return res.status(304).json({err:"song does not exist"});
        }
        // Step 3: We can simply add the song to the  playlist
        playlist.song.push(songId);
        await playlist.save();

        return res.status(200).json(playlist);
    }
);

module.exports = router;