const express = require('express');
const usersController = require('../controller/usersController');

const router = express.Router();

router.get('/', usersController.getUsers);
router.post('/', usersController.create);
router.delete('/', usersController.remove);
router.put('/', usersController.atualização);
router.get('/access', usersController.acess);

module.exports = router;
