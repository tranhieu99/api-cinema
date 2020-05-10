const express = require('express')
const {getTheatreController, 
    addTheatreController,
    deleteTheatreController,
    updateTheatreController,
    getSingleTheatreController
} = require('../controller/theatre.controller')
const router = express.Router();

router.get('/admin/theatre', getTheatreController);
router.post('/admin/theatre', addTheatreController);
router.delete('/admin/theatre' , deleteTheatreController)
router.put("/admin/theatre/:theatre_id", updateTheatreController)
router.get('/admin/theatre/:id', getSingleTheatreController)
module.exports = router;