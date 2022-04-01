const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express.Router();
const mongoose = require("mongoose");

// ============================
//        API routes
// ============================

// Get Posts
app.get('/', async (req, res) => {
    res.send('ballz')
})

// Add Post

// Delete Post

module.exports = app;