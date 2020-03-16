const {pool} = require('../database/db');


const getAllFilmModel = () => {
    return new Promise((resolve,reject) => {
        pool.query("SELECT * from movie INNER JOIN type ON(movie.movie_type = type.type_id)" , (err,result) => {
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}
const addFilmModel =  (params) => {
return new Promise((resolve,reject) => {
    pool.query("INSERT INTO movie SET ? ", params, (err,result) =>{
        if(err){
            reject(err)
        }
        else{
            resolve(result)
        }
    })
})
}
const getFilmType = (params) =>{
    return new Promise ((resolve,reject) => {
        pool.query("SELECT * FROM type", (err,result) =>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}
const deleteFilmModel = (movie_id) => {
    return new Promise ((resolve,reject) => {
        pool.query('DELETE FROM movie WHERE movie_id = ?' , [movie_id] , (err, result) => {
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
    getAllFilmModel,
    addFilmModel,
    getFilmType,
    deleteFilmModel
}