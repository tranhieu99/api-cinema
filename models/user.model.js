const {pool} = require('../database/db');

const getUserByUserName = (user_name) => {
    return new Promise((resolve,reject) =>{
        pool.query("SELECT * from user WHERE user_name = ?", user_name, (err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}
const uploadUserAvatarModel = (user_name,file) => { 
    return new Promise ((resolve,reject) => {
        pool.query("UPDATE user SET avatar = ? WHERE user_name = ?",[file,user_name] , (err,result)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}
const updateUserModel = ( params) =>{
    return new Promise ((resolve,reject) => {
        pool.query(`UPDATE user SET  ? WHERE user_name = "${params.user_name}"`, params, (err,result) =>{
            if(err){
                reject(err)
            }
            else{resolve(result)}
        })
    })
}
module.exports = {
    getUserByUserName,
    uploadUserAvatarModel,
    updateUserModel
}


