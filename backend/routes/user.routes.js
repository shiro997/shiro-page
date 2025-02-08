const express = require('express');
const router = express.Router();
const UserController = require('../Controller/Security.controller')

router.post('/',UserController.createUser);
router.get('/',UserController.getUsers);
router.post('/login',UserController.Login);

module.exports = router;