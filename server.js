const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client:'pg',
    connection:{
        host:'postgresql-trapezoidal-85274',
        user:'postgres',
        password:'system',
        database:'imagerecog'
    }
});




const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("it is working ");
})


app.post('/signin',(req,res) => {  signin.handleSignin(req,res,db,bcrypt) })

app.post('/register', (req,res) => { register.handleRegister(req,res,db,bcrypt) }  )

app.get('/profile/:id',(req,res) => {  msWriteProfilerMark.handleProfileGet(req,res,db) })

app.put('/image', (req,res) => { Image.handleImage(req,res,db) })






app.listen(process.env.PORT ||3000,()=>{
    console.log("app is running");
})



