const {getTheatreModel,
    addTheatreModel,
    deleteTheatreModel,
    updateTheatreModel,
    getSingleTheatreModel
} = require("../models/theatre.models")
const shortId = require("shortid")
const getTheatreController = async (req,res) =>{
try {
    const listTheatre = await getTheatreModel();
    res.json(listTheatre)
} catch (error) {
    console.log(error)
}
}
const addTheatreController = async (req,res)=>{
    try {
        const dataToAdd = {
            'theatre_id': shortId.generate(5),
           'theatre_name': req.body.theatre_name,
           'theatre_seat': req.body.theatre_seat

        }
        const success = await addTheatreModel(dataToAdd)

        if(success){
            res.send(dataToAdd)

        }
    } catch (error) {
        console.log(error)
    }
}
const deleteTheatreController = async (req,res) =>{
    try {
        const deleted = await deleteTheatreModel(req.body.id)
        if(deleted){
            res.send({
                message:"success"
            })
        }
    } catch (error) {
        console.log(error)
    }
}
const updateTheatreController = async (req,res) =>{
    try {
        const dataToUpdate = {
            theatre_name: req.body.theatre_name,
            theatre_seat: req.body.theatre_seat
        }
        console.log(req.body)
        const updated = updateTheatreModel(req.body.theatre_id,dataToUpdate)
        if(updated){
            res.send({
                message:"success"
            })
        }
           
    } catch (error) {
        console.log(error)
    }
}
const getSingleTheatreController = async (req,res) =>{
    try {
        const result = await getSingleTheatreModel(req.params.id)
        if(result){
            res.send(result[0])
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getTheatreController,
    addTheatreController,
    deleteTheatreController,
    updateTheatreController,
    getSingleTheatreController
}