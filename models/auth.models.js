
const {pool} = require('../database/db');

function getUser(user_name) {
  return new Promise((resolve,reject)=>{
    pool.query(`SELECT * from user WHERE user_name = "${user_name}"`, (err,results)=>{
      if(err) {
        reject(err)
      }
      else {
        resolve(results)
      }
    })
  })
}
module.exports = {
  getUser
}