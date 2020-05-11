const express = require('express')
const router = express.Router()
const {getAssignController,
    queryAssignController,
    addAssignController
} = require("../controller/assign.controller")


router.get("/admin/assign", getAssignController)
router.get("/admin/assign/query", queryAssignController)

router.post("/admin/assign", addAssignController)

module.exports = router;