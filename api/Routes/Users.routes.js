const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/Users.controller');

router.get('/users', usersController.getUsers);

module.exports = router;
