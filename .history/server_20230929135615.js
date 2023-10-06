import express from "express";
import bcrypt from "bcrypt";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCXxJUB2lVU-T-O_ICT7OmbgW1b86CTQ8k",
    authDomain: "ecom-webaite-2.firebaseapp.com",
    projectId: "ecom-webaite-2",
    storageBucket: "ecom-webaite-2.appspot.com",
    messagingSenderId: "407286740877",
    appId: "1:407286740877:web:0a06565b76829b9d32efc4"
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