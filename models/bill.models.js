const {pool} = require('../database/db');

const createBillModel = (params)=>{
return new Promise ((resolve,reject)=>{
    pool.query('INSERT INTO bill SET ?' , params, (err,result) =>{
        if(err){
            reject(err)
        }
        else resolve(result)
    })
})
}
module.exports = {
    createBillModel
}