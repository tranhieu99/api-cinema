const shortId = require('shortid')
const {getAllFilmModel,addFilmModel,getFilmType,deleteFilmModel} = require('../models/film.models')
const  {transTypeNameToTypeId} = require('../helper/helper')
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
 const addFilmController = async (req,res) =>{
    
   try {
       const movie_type = transTypeNameToTypeId(req.body.movie_type)
       const dataToAdd = {
        movie_id: shortId.generate(10),
        ...req.body,
        movie_type,
        movie_image: `http://localhost:5555/poster/${req.file.filename}`
       }
       console.log(dataToAdd)
        const addedMovie = await addFilmModel(dataToAdd)
        if(addedMovie){
            res.send({
                movie_id: "hello",
                ...req.body,
                type_name: req.body.movie_type,
                movie_image: `http://localhost:5555/poster/${req.file.filename}`
             })
        }
      
   } catch (error) {
       req.send({err : "Error From server"})
   }

 }
 const getFilmTypeController = async (req,res) => {
    try {
        const gotFilm = await getFilmType();
        res.send(gotFilm)
    } catch (error) {
        console.log(error)
    }
 
 }
const deleteFilmController = async (req,res) =>{
    try {
        const deletedFilm = await deleteFilmModel(req.params.movie_id)
        if(deletedFilm){
            res.status(200).send({
                'message': 'success'
            })
        }
      
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getListFilmController,
    addFilmController,
    getFilmTypeController,
    deleteFilmController
}