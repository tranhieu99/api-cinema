
const {getUser} = require('../models/auth.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signIn = async (req,res) =>{
    const body = req.body;
try {
    const dataSignIn = await getUser(body.user_name);
    if(!dataSignIn[0]){
       return res.status(400).send({error: "Tên đăng nhập không có"});
    }
    const checkPassword = await bcrypt.compare(body.pass_word,dataSignIn[0].pass_word)

    if(checkPassword){
        const token = jwt.sign({data:{username:dataSignIn[0].user_name}}, process.env.SECRET_KEY);
        res.header('auth-token', token).status(200).json({
            token,
            role: dataSignIn[0].role
        });
    }
    else{
        res.status(400).send({error: "Sai mật khẩu"});
    }
} catch (error) {
    return res.status(400).send({error: "Sai tên đăng nhập hoặc mật khẩu"});

}

}

 module.exports =  {
    signIn
}

