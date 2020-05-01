const shortId = require('shortid')
const {getAllFilmModel,addFilmModel,getFilmType,deleteFilmModel,updateFilmModel,addFilmTypeModel} = require('../models/film.models')
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
        const addedMovie = await addFilmModel(dataToAdd)
        if(addedMovie){
            res.send({
                movie_id: dataToAdd.movie_id,
                ...req.body,
                type_name: req.body.movie_type,
                movie_image: `http://localhost:5555/poster/${req.file.filename}`
             })
        }
      
   } catch (error) {
       res.send({err : "Error From server"})
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
const editFilmController = async (req,res) =>{
    let movie_type = req.body.movie_type;
    if(req.body.movie_type.length > 3){
         movie_type = transTypeNameToTypeId(req.body.movie_type)
    }
    if(req.file) {
        const dataToAdd = {
            ...req.body,
            movie_type,
            movie_image: `http://localhost:5555/poster/${req.file.filename}`
           }
           delete dataToAdd.movie_id
           delete dataToAdd.type_name
           delete dataToAdd.type_id
           const updatedData = await updateFilmModel(dataToAdd,req.params.movie_id)
           res.send({
            ...req.body,
            type_name: req.body.type_name,
            movie_image: `http://localhost:5555/poster/${req.file.filename}`
         })
    }
       else {
        const dataToAdd = {
            ...req.body,
            movie_type,
           }
           delete dataToAdd.movie_id
           delete dataToAdd.type_name
           delete dataToAdd.type_id


           const updatedData = await updateFilmModel(dataToAdd,req.params.movie_id)
        res.send({
            ...req.body,
            type_name: req.body.type_name,
         })
       }

}
const addFilmTypeController = async (req,res) => {
    const typeName = req.body.filmType
    const typeId = transTypeNameToTypeId(typeName)
    let dataToAdd = {
        type_id: typeId,
        type_name: typeName
    }
    try {
        const allFilmType = await getFilmType();
allFilmType.forEach(item =>{
    if(item.type_id === dataToAdd.type_id){
        dataToAdd = {
            type_id: typeId + '_' + shortId.generate(3),
            type_name: typeName
        }
    }
})
        const inserted = await addFilmTypeModel(dataToAdd)
        if(inserted){
            res.send({
                message:"success"
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
    deleteFilmController,
    editFilmController,
    addFilmTypeController
}