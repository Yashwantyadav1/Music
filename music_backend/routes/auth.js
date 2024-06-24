const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const {getToken} = require("../utils/helpers");

// this post route will help to register a user
router.post("/register",async (req, res) => {
    // This code is run when the register api is called as a post request

    // My req.body will be of the format {email,password,firstName,LastName,userName}
    const {email, passport, firstName, LastName, userName} = req.body;

    // step 2: Does a user with this email already exist ? If yes throw error.
    const user = User.findone({email:email});
    if( user) {
        // bydefault status code is 200
        return res.status(403).json({error: "A useer with this email already exist "});
    }
    // This is a valid request 

    //  Step 3: Create a new user in the db 
    // step 3.1: we donoy store password in plaintext 
    //  xyz : we convert the plain text password to the hash 
    const hashedpassword = bcrypt.hash(password, 10);
    const newUserData = {email, password: hashedpassword, firstName, LastName, userName};
    const newUser = await User.create(newUserData);

    // step 4: we want to create the token to return the user
    const token = await getToken(email, newUser); 

    //  step 5: return the result to the user 
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});