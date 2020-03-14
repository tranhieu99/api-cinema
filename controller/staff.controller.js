const {getAllStaffModel,deleteStaffModel} = require('../models/staff.models')
const getAllStaffController = async (req,res) =>{
    try {
        const allStaff = await getAllStaffModel();
        res.send([...allStaff])
    } catch (error) {
        console.log(error)
    }
}
const deleteStaffController = async (req,res) =>{
    try {
        const deleteStaff = await deleteStaffModel(req.params.user_id)
        res.status(200)
    } catch (error) {
        res.send({err: "Error"})
    }
    
}
module.exports = {
    getAllStaffController,
    deleteStaffController
    
}