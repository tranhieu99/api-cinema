const express = require('express')

const router = express.Router();
const {getAllStaffController,deleteStaffController} = require('../controller/staff.controller')


router.route('/admin/staff-information').get(getAllStaffController)
router.delete('/admin/delete-staff/:user_id', deleteStaffController)
module.exports = router;