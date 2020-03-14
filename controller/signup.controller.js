const {addUser,getAllUserByUserName,getAllUserByEmail} = require('../models/signup.models')
const bcrypt = require('bcrypt')
const {validateSignUp} = require('../validate')
const shortid = require('shortid');

const signUp = async (req,res) =>{
    console.log(req.body)
    const {
        first_name,
        last_name,
            email,
         user_name, 
         pass_word,
             zip_code,
          address,
          country,
          city,
          birthday,
          gender,
         role,
         phone_number} = req.body;
         try{
    const salt = await bcrypt.genSalt(10);
    var hash_password = await bcrypt.hash(pass_word, salt);
    const dataToInsert =  {user_id: shortid.generate(10),first_name, last_name, email ,user_name, pass_word: hash_password,zip_code,address,country,city,birthday,gender,role,phone_number}
    const {error} = validateSignUp(req.body);
    if(error){
        return res.status(400).send({
            error: error.details[0].message
        });
    }
    const allUserByUserName = await getAllUserByUserName(user_name);
    const allUserByEmail = await getAllUserByEmail(email)
    if(allUserByUserName[0]){
        res.status(400).send({error: "User name exist"});
    }
    else if(allUserByEmail[0]){
        res.status(400).send({error:"Email exist"});
    }
    else{
        const inserted = await addUser(dataToInsert);
        if(inserted){
            res.status(200).send({
                message: "Inserted"
            });
        }
        else{
            res.status(404).send({error: "Error from server"});
        }
    }
}catch(error){
    console.log(error)
}
}

module.exports = {
    signUp
}