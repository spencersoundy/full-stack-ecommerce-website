import express from "express";
import bcrypt from "bcrypt";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbwYA_IzN-d3GOWYEiqJUWwvs6pCRZuIM",
  authDomain: "ecom-website-55d8c.firebaseapp.com",
  projectId: "ecom-website-55d8c",
  storageBucket: "ecom-website-55d8c.appspot.com",
  messagingSenderId: "893250395481",
  appId: "1:893250395481:web:8ac24361d8f3cb8d934048"
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
    else if(!tac.checked){
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
                    bcrypt.hash(password, salt, (err, hash) =)
                })
            }
        })
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