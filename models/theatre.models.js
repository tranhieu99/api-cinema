
const {pool} = require('../database/db');


const getTheatreModel = () =>{
    return new Promise((resolve,reject)=>{
        pool.query("SELECT * from theatre", (err,result) =>{
            if(err){
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}

const addTheatreModel = (params) =>{
    return new Promise((resolve,reject) => {
        pool.query("INSERT INTO theatre SET ?", params, (err,result) => {
            if(err){
                reject(err)
            } else resolve(result)
        } )
    })
}
const deleteTheatreModel = (id) =>{
    return new Promise((resolve,reject) =>{
        pool.query("DELETE from theatre where theatre_id = ?" , id, (err, result) =>{
            if(err){
                reject(err)
            } else resolve(result)

        })
    })
}
const updateTheatreModel = (id,params) =>{
    return new Promise((resolve,reject) => {
        pool.query(`UPDATE theatre SET ? where theatre.theatre_id = "${id}"` , params, (err,result) =>{
            if(err){
                reject(err)
            } else resolve(result)
        } )
    })
}
const getSingleTheatreModel = (id) =>{
    return new Promise((resolve,reject) =>{
        pool.query("Select * from theatre where theatre_id = ? " , id, (err,result) =>{
            if(err){
                reject(err)
            } else resolve(result)

        })
    })
}
module.exports = {
    getTheatreModel,
    addTheatreModel,
    deleteTheatreModel,
    updateTheatreModel,
    getSingleTheatreModel
}