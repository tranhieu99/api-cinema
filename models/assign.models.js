const {pool} = require('../database/db');

const getAssignModel = () => {
    return new Promise((resolve,reject) => {
        pool.query("SELECT movie.movie_name, movie_show_date, theatre.theatre_name, show_time.time FROM `movie_show`, `movie`, `theatre`, `show_time` WHERE movie.movie_id = movie_show.movie_id and theatre.theatre_id = movie_show.theatre_id and movie_show.show_time_id = show_time.show_time_id", (err,result) =>{
            if(err){
                reject(err)
            }else resolve(result)
        })
    })
}
const queryAssign = (key,key2, table) =>{
    return new Promise ((resolve,reject) => {
        pool.query(`SELECT ${key},${key2} from ${table}`, (err,result) =>{
            if(err){
                reject(err)
            }else resolve(result)
        } )
    })
}
const addAssignModel = (params) =>{
    return new Promise((resolve,reject) => {
        pool.query(`INSERT INTO movie_show SET ? `, params, (err,result) =>{
            if(err){
                reject(err)
            }else resolve(result)
        })
    })
}
module.exports = {
    getAssignModel,
    queryAssign,
    addAssignModel
}