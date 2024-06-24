// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');  // Import dotenv correctly
dotenv.config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const User = require("./models/user");
// Initialize Express app
const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB using mongoose
mongoose.connect(process.env.URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
    });

    // passport-jwt setup


let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thiskeysupposedToBeSecerate';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        // done (error ,doestheuserExist)
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

// Define a basic route
app.get("/", (req, res) => {
    res.send("HELLO WORLD");
});

// Start the Express server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});


