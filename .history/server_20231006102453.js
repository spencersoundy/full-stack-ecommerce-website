import express from "express";
import bcrypt from "bcrypt";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHf69lQ144fhun7L5mofvUi0CAycrVgc4",
    authDomain: "ecom-website2-c02cf.firebaseapp.com",
    projectId: "ecom-website2-c02cf",
    storageBucket: "ecom-website2-c02cf.appspot.com",
    messagingSenderId: "299819465312",
    appId: "1:299819465312:web:baa904fd8da77d8e0d6105"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore();

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
    else if(!tac){
        res.json({ 'alert' : 'you must agree to our terms and conditions'});
    }
    else{
        // store data in db
        const users = collection(db, "users");

        getDoc(doc(users, email)).then(user => {
            if(user.exists()){
                return res.json({ 'alert' : 'email already exists' })
            }
            else{
                // encrypt the password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hash) => {
                        req.body.password = hash;
                        req.body.seller = false;

                        // set the  doc
                        setDoc(doc(users, email), req.body).then(data => {
                            res.json({
                                name: req.body.name,
                                email: req.body.email,
                                seller: req.body.seller,
                            })
                        })
                    })
                })
            }
        })
    }
})

app.get('/login', (req, res) => {
    res.sendFile("login.html", { root : "public" })
})

app.post('/login,', (req, res) => {
    let {email, password} = req.body;

    if(!email.length || !password.length){
        res.json({ 'alert' : 'fill all the inputs'})
    }

    const users = collection(db, "users");

    getDoc(doc(users, email))
    .then(user => {
        if(!user.exists()){
            return res.json({'alert' : 'email doest not exist'})
        }
        else{
            bcrypt.compare(password, user.data().password, (err, result) => {
                if(result){
                    let data = user.data();
                    return res.jason({
                        name: data.name,
                        email: data.email,
                        seller: data.seller
                    })
                }
                else{
                    return res.json({'alert' : 'password is incorrect'})
                }
            })
        }
    })
})

// seller route
app.get('/seller', (req))

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