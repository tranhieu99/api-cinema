const {pool} = require('../database/db');

const getAllStaffModel = () =>{
    return new Promise ((resolve,reject)=>{
        pool.query("SELECT * FROM user WHERE role != 'GUEST'", (err,result) =>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}
const deleteStaffModel = (id) =>{
    return new Promise ((resolve, reject) =>{
 pool.query("DELETE from user WHERE user_id = ?", [id], (err,result) =>{
     if(err){
         reject(err)
     }
     else{
         resolve(result)
     }
 })
    })
}
module.exports = {
    getAllStaffModel,
    deleteStaffModel
}