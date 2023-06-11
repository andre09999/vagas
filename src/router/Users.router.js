const express = require('express');
const usersController = require('../controller/usersController');
const validate = require('../middleware/validade');

const router = express.Router();

router.get('/', usersController.getUsers);
router.post('/', usersController.create);
router.get('/access', usersController.acess);

router.use(validate);
router.delete('/', usersController.remove);
router.put('/:id', usersController.atualização);

module.exports = router;
