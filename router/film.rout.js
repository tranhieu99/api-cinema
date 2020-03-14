const express = require('express');

const router = express.Router();

const {getListFilmController} = require('../controller/film.controller')
router.route("/admin/film").get(getListFilmController)



module.exports = router;