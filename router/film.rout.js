const express = require('express');

const router = express.Router();

const {getListFilm, addFilmController} = require('../controller/film.controller')
router.route("/admin/film").get(getListFilm).post(addFilmController);


module.exports = router;