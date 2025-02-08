const express = require('express');
const router = express.Router();
const mailController = require('../Controller/mail.controller');
const deviceRoutes = require('./device.routes');
const userRoutes = require('./user.routes');

router.use('/device',deviceRoutes);
router.use('/user', userRoutes);
router.post('/mail',mailController.enviarCorreo);

module.exports = router