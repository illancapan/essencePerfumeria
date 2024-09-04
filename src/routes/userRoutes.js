const express = require('express');
const { registroUsuario, iniciarSesion } = require('../controllers/usercontroller');

const router = express.Router();

router.post('/usuarios', registroUsuario);
router.post('/login', iniciarSesion);

module.exports = router;