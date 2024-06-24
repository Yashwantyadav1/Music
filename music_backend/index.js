// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');  // Import dotenv correctly
dotenv.config();
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

// Define a basic route
app.get("/", (req, res) => {
    res.send("HELLO WORLD");
});

// Start the Express server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
