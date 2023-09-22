import express from "express";
import bcrypt from "bcrypt";

// init server
const app = express();

//middlewares
app.use(express.sta)

//routes
//home route
app.get('/',(req, res) => {
    res.sendFile("index.html", {root : "public"})
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})