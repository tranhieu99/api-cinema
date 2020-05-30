const express = require('express')
const bodyParser = require('body-parser')
const authRout = require('./router/auth.rout')
const app = express();
const signUpRout = require('./router/signup.rout')
const userRout = require('./router/user.rout')
const staffRout = require('./router/staff.rout')
const filmRout = require('./router/film.rout')
const theatreRout = require('./router/theatre.rout')
const assignRout = require('./router/asign.rout')
const billRout = require('./router/bill.rout')
var cors = require('cors')
app.use(cors())
app.use(express.static('./uploads'))

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use("/", authRout);
app.use("/", signUpRout);
app.use('/',staffRout)
app.use("/", userRout)
app.use('/',filmRout)
app.use('/', theatreRout);
app.use('/',assignRout);
app.use('/', billRout)
app.listen(5555,() =>{
    console.log('App is listen in port', 5555)
})