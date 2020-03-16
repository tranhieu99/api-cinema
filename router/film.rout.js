const express = require('express');

const router = express.Router();
var multer  = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/poster/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
  })
  var upload = multer({ storage: storage })

const {getListFilmController,addFilmController,getFilmTypeController,deleteFilmController} = require('../controller/film.controller')
router.route("/admin/film")
.get(getListFilmController)
router.post('/admin/film', upload.single('movie_image'),addFilmController)

router.route('/admin/film-type').get(getFilmTypeController);

router.delete('/admin/film/delete/:movie_id', deleteFilmController)

module.exports = router;