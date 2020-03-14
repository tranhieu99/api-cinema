const {getAllFilmModel} = require('../models/film.models')
const getListFilmController = async(req,res) =>{
  try {
      const listFilm = await getAllFilmModel();
      
      res.json(listFilm)
  } catch (error) {
      console.log(error)
      res.json({
          error: "Error from server"
      })
  }
 }
module.exports = {
    getListFilmController
}