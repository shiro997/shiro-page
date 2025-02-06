const express = require('express');
const router = express.Router();
const UserController = require('../Controller/Security.controller')

router.post('/',UserController.createUser);
//router.post('/',deviceController.createDevices);

module.exports = router