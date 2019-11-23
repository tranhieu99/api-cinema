const {pool} = require('../database/db');

const addUser = (param) => {
    let date = new Date();
    return new Promise((resolve,reject) =>{
        pool.query("INSERT INTO user SET ? ", {user_id: param.user_id ,
                                               first_name: param.first_name,
                                               last_name:param.last_name,
                                                email: param.email,
                                                user_name:param.user_name, 
                                                pass_word: param.pass_word,
                                                created: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}, (err,results) =>{
            if(err) reject(err);
            else {
                resolve(results);
            }
        });
    })
}

const getAllUserByUserName = ((user_name) =>{
    return new Promise((resolve,reject)=>{
        pool.query(`SELECT * FROM user WHERE user_name = "${user_name}"`,(err,results) => {
            if(err){
              reject(err);
            }
            else {
              resolve(results);
            }
          })
    })
    });
    const getAllUserByEmail =  (email =>{
        return new Promise((resolve,reject)=>{
            pool.query(`SELECT * FROM user WHERE email = "${email}"`,(err,results) => {
                if(err){
                  reject(err);
                }
                else {
                  resolve(results);
                }
              })
        })
    })
module.exports = {
    addUser,
    getAllUserByUserName,
    getAllUserByEmail
}