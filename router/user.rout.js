const express = require('express');
var multer  = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/avatars/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
  })
  
  var upload = multer({ storage: storage })
  
 const {uploadUserAvatarController} = require('../controller/user.controller')
 const router = express.Router()

router.post("/api/upload", upload.single('avatar'), uploadUserAvatarController)
 

const {getUserInfoController} = require('../controller/user.controller')
router.route("/api/user/:user_name")
.get(getUserInfoController)




module.exports = router;