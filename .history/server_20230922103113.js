import express from "express";
import bcrypt from "bcrypt";

// init server
const app = express();

//middlewares
app.use(express.static("public"));
app.use(express.json()) //enables form sharing

//routes
//home route
app.get('/',(req, res) => {
    res.sendFile("index.html", {root : "public"})
})

// 404 route
app.get('/404', (res, res) => {
    res.send
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})