// controllers/userController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { crearUsuario, obtenerUsuarioPorEmail } = require('../models/userModel');

const registroUsuario = async (req, res) => {
  const { nombre, email, contraseña, direccion } = req.body;

  try {
    const usuarioExistente = await obtenerUsuarioPorEmail(email);
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    const nuevoUsuario = await crearUsuario(nombre, email, contraseña, direccion);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};

const iniciarSesion = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const usuario = await obtenerUsuarioPorEmail(email);
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contraseñaValida) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email } });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

module.exports = {
  registroUsuario,
  iniciarSesion,
};
