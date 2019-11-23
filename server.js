const express = require('express')
const bodyParser = require('body-parser')
const authRout = require('./router/auth.rout')
const app = express();
const signUpRout = require('./router/signup.rout')
app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use("/", authRout);
app.use("/", signUpRout);

app.listen(5555,() =>{
    console.log('App is listen in port', 5555)
})