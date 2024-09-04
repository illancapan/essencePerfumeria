const pool = require('../../database/config');
const bcrypt = require('bcryptjs');

const crearUsuario = async (nombre, email, contraseña, direccion) => {
  const hashedPassword = await bcrypt.hash(contraseña, 10);
  const result = await pool.query(
    'INSERT INTO usuarios (nombre, email, contraseña, direccion) VALUES ($1, $2, $3, $4) RETURNING id, nombre, email, direccion',
    [nombre, email, hashedPassword, direccion]
  );
  return result.rows[0];
};

const obtenerUsuarioPorEmail = async (email) => {
  const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
  return result.rows[0];
};

module.exports = {
  crearUsuario,
  obtenerUsuarioPorEmail,
};
