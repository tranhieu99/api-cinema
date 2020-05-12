const {getAssignModel,queryAssign, addAssignModel, deleteAssignModel} = require("../models/assign.models")
const shortId = require('shortid')
const getAssignController =  async (req,res) =>{
    try {
        const result = await getAssignModel()
        if(result){
            res.json(result)
        }
    } catch (error) {
        console.log(error)
    }
   
}
const queryAssignController = async (req,res) =>{
        try {
            const movieName = await queryAssign('movie_name', 'movie_id','movie')
            const time = await queryAssign('time','show_time_id', 'show_time')
            const theatreName = await queryAssign('theatre_name', 'theatre_id', 'theatre')
            res.json({
                movieName, time, theatreName
            })
        } catch (error) {
            console.log(error)
        }
}
const addAssignController = async (req,res)=>{
    const dataToAdd = {
        movie_show_id: shortId.generate(10),
        movie_id: req.body.movie_id,
        show_time_id: req.body.show_time_id,
        theatre_id: req.body.theatre_id,
        movie_show_date: req.body.movie_show_date

    }
    try {
        const added = await addAssignModel(dataToAdd)
        if(added){
            res.json(req.body)

        }

    } catch (error) {
        console.log(error)
    }
}
const deleteAssignController = async (req,res) =>{
try {
const result = await deleteAssignModel(req.params.id)
if(result){
    res.send({
        message:"success"
    })
}
} catch (error) {
console.log(error)
}
  
}
module.exports = {
    getAssignController,
    queryAssignController,
    addAssignController,
    deleteAssignController
}