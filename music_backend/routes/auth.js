const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {getToken} = require("../utils/helpers");

// this post route will help to register a user
router.post("/register",async (req, res) => {
    // This code is run when the register api is called as a post request

    // My req.body will be of the format {email,password,firstName,LastName,userName}
    const {email, password, firstName, LastName, userName} = req.body;

    // step 2: Does a user with this email already exist ? If yes throw error.
    const user = await User.findone({email:email});
    if( user) {
        // bydefault status code is 200
        return res.status(403).json({error: "A useer with this email already exist "});
    }
    // This is a valid request 

    //  Step 3: Create a new user in the db 
    // step 3.1: we donoy store password in plaintext 
    //  xyz : we convert the plain text password to the hash
    // xyz ---> adbhgrernfuq3himnjnnln
    // my hash of xyz depends on 2 parameters.
    // If i keep these 2 parameter same , xyz always gives the same hash. 
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

router.post("/login", async (req, res) => {
    // Step 1: Get email and password sent by user from req.body
    const {email, password} = req.body;

    // Step 2: check if a user with the given email exists. If not , the credentials are invalid.
     const user = await User.findOne({email: eamil});
     if(!user) {
        return res.status(403).json({err: "Invalid credentials"});
     }
     // Step 3: If the user exists , check if the password is correct .If not, the credentials are Invalid.
    // This is the tricky step.why? Because we stored the original password i a hashed form , which we cannot use to get back the  password.
    // I cannot do : if(password === user .password )
    // bcrypt .compare enabled us to compare 1 password in plaintext(password from req.body) to a hashed password (the one in our db ) Securely.
    const isPasswordValid = await bcrypt.compare(password, user .password);
    // This will be True or False.
    if(!isPasswordValid) {
        return res.status(403).json({err:"Invalid credentials"});
    }
    // step 4: If the credential are correct , return a token to the user.
    const token = await getToken(user.email,user);
    const userToReturn = {...User.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);



});


module.exports = router;