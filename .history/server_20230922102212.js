import express from "express";
import bcrypt from "bcrypt";

// init server
const app = express();

//routes
//home route
app.get('/',(req, res) => {
    res.sendFile()
})