const express = require('express')
const router = express.Router()
const {creatBillController} = require('../controller/bill.controller')
router.post('/bill', creatBillController)

module.exports = router