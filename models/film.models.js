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
const updateFilmModel = (params,movie_id) =>{
    return new Promise((resolve,reject) => {
        pool.query(`UPDATE movie SET ? WHERE movie.movie_id = '${movie_id}'`,params, (err,result) => {
            if(err) {
                reject(err)
            }
            else resolve(result)
        })
    })
}
const addFilmTypeModel = (params) => {
    return new Promise ((resolve,reject) => {
        pool.query('INSERT INTO type SET ?', params, (err,result) => {
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}

// models movie hompage Tran Trung Hieu 14/5/2020

const getSingleMovieModel = (movie_id) => {
    return new Promise((resolve,reject) => {
        pool.query(`Select * from movie,type where movie.movie_id = "${movie_id}" and movie.movie_type = type.type_id` , (err,result) =>{
            if(err){
                reject(err)
            }
            else resolve(result)
        })
    })
}

module.exports = {
    getAllFilmModel,
    addFilmModel,
    getFilmType,
    deleteFilmModel,
    updateFilmModel,
    addFilmTypeModel,
    getSingleMovieModel
}