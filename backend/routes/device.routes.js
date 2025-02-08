const express = require('express');
const router = express.Router();
const deviceController = require('../Controller/Device.controller')

router.get('/',deviceController.getDevices);
router.post('/',deviceController.createDevices);

module.exports = router;