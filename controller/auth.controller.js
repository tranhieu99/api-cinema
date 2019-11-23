
const {getUser} = require('../models/auth.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signIn = async (req,res) =>{
    const body = req.body;

    const dataSignIn = await getUser(body.user_name);
        if(!dataSignIn[0]){
           return res.status(400).send("User name does not exist");
        }
        const checkPassword = await bcrypt.compare(body.pass_word,dataSignIn[0].pass_word)

        if(checkPassword){
            const token = jwt.sign({_id: dataSignIn[0].user_id}, process.env.SECRET_KEY);
            res.header('auth-token', token).status(200).send(token);
        }
        else{
            res.status(400).send("Wrong password please try again !!")
        }
}

 module.exports =  {
    signIn
}

