const express = require('express')
const router = express.Router()
const {getAssignController,
    queryAssignController,
    addAssignController,
    deleteAssignController,
    getSingleAssignController
} = require("../controller/assign.controller")


router.get("/admin/assign", getAssignController)
router.get("/admin/assign/query", queryAssignController)

router.post("/admin/assign", addAssignController)
router.delete("/admin/assign/:id", deleteAssignController)
router.get('/assign/:movie_id', getSingleAssignController)
module.exports = router;