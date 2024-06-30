const jwt = require("jsonwebtoken");

exports = {}

exports.getToken = async (email, user) => {
    // Assumes this code is complete
     const token = jwt.sign (
        {identifier: user._id},
        "thiskeysupposedToBeSecerate");
     return token;

};
module.exports = exports;