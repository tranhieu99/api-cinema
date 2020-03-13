const {pool} = require('../database/db');


const getAllFilm = () => {
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
const updateFilmModel =  (param,movieId) => {
return new Promise((resolve,reject) => {
    pool.query("UPDATE ")
})
}
module.exports= {
    getAllFilm
}