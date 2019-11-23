const express = require('express')
const authCtl = require('../controller/auth.controller');
const models = require('../models/auth.models')
const router = express.Router()

router.route('/auth/signin')
    .post(authCtl.signIn)
module.exports = router;
