const {addUser,getAllUserByUserName,getAllUserByEmail} = require('../models/signup.models')
const bcrypt = require('bcrypt')
const {validateSignUp} = require('../validate')
const shortid = require('shortid');

const signUp = async (req,res) =>{
    const {first_name, last_name, email ,user_name, pass_word} = req.body;
    const salt = await bcrypt.genSalt(10);
    var hash_password = await bcrypt.hash(pass_word, salt);
    const dataToInsert =  {user_id: shortid.generate(10),first_name, last_name, email ,user_name, pass_word: hash_password}

    const {error} = validateSignUp(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const allUserByUserName = await getAllUserByUserName(user_name);
    const allUserByEmail = await getAllUserByEmail(email)
    if(allUserByUserName[0]){
        res.status(400).send("User name exist");
    }
    else if(allUserByEmail[0]){
        res.status(400).send("Email exist");
    }
    else{
        const inserted = await addUser(dataToInsert);
        if(inserted){
            res.status(200).send("Inserted");
        }
        else{
            res.status(404).send("Error from server");
        }
    }
}

module.exports = {
    signUp
}