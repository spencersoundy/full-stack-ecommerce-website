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
    res.sendFile("index.html", { root : "public" })
})

//signup
app.get('/signup', (req, res) => {
    res.sendFile("signup.html", { root : "public" })
})

app.post('/signup', (req, res) => {
    const { name, email, password, number, tac } = req.body;

    //form validations
    if(name.length < 3){
        res.json({ 'alert' : 'name must be 3 letters long'});
    }
    else if(!email.length){
        res.json({ 'alert' : 'enter your email'});
    }
    else if(password.length < 8){
        res.json({ 'alert' : 'password must contain 8 letters'});
    }
    else if(Number(number) || number.length < 10){
        res.json({ 'alert' : 'invalid number, please enter valid one'});
    }
    else if(!tac.checked){
        res.json({ 'alert' : 'you must agree to our terms and conditions'});
    }
    else{
        // store data in db
    }
})

// 404 route
app.get('/404', (req, res) => {
    res.sendFile("404.html", { root : "public" })
})

app.use((req, res) => {
    res.redirect('/404')
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})