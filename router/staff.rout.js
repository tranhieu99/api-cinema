const express = require('express')

const router = express.Router();
const {getAllStaffController,deleteStaffController,addStaffController} = require('../controller/staff.controller')


router.route('/admin/staff-information').get(getAllStaffController)
router.route('/admin/add-staff').post(addStaffController)
router.delete('/admin/delete-staff/:user_id', deleteStaffController)
module.exports = router;