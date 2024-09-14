import request from 'supertest';
import app from '../../server.js';  // Asume que tienes tu app en este archivo
import { pool } from '../../database/config.js';  // Tu pool de PostgreSQL

describe('Products API', () => {

  // Crear un fragancia antes de los tests
  let fraganciaId;

  beforeAll(async () => {
    const fraganciaResponse = await pool.query(`
      INSERT INTO fragancias (nombre, descripcion) 
      VALUES ('Fragancia Test', 'Descripción de la fragancia de prueba') 
      RETURNING id
    `);
    fraganciaId = fraganciaResponse.rows[0].id;
  });

  afterAll(async () => {
    // Limpiar la base de datos después de las pruebas
    await pool.query('DELETE FROM productos');
    await pool.query('DELETE FROM fragancias');
    await pool.end();
  });

  test('GET /api/perfumes - Debe retornar una lista de productos', async () => {
    const response = await request(app).get('/api/perfumes');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/perfumes/:id - Debe retornar un producto específico', async () => {
    const newProduct = await pool.query(`
      INSERT INTO productos (nombre, descripcion, precio, descuento, stock, fragancia_id, imagen)
      VALUES ('Producto Test', 'Descripción del producto de prueba', 100.00, 10.00, 50, $1, 'imagen.jpg')
      RETURNING *;
    `, [fraganciaId]);

    const response = await request(app).get(`/api/perfumes/${newProduct.rows[0].id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('nombre', 'Producto Test');
  });

  test('POST /api/perfumes - Debe agregar un nuevo producto', async () => {
    const newProduct = {
      nombre: 'Perfume Nuevo',
      descripcion: 'Descripción del perfume nuevo',
      precio: 60.00,
      descuento: 5,
      stock: 300,
      fragancia_id: fraganciaId,  // Usa el fragancia_id creado en beforeAll
      imagen: 'imagen_nueva.jpg'
    };

    const response = await request(app)
      .post('/api/perfumes')
      .send(newProduct);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('nombre', 'Perfume Nuevo');
    expect(response.body).toHaveProperty('id');
  });

  test('PUT /api/perfumes/:id - Debe actualizar un producto existente', async () => {
    const newProduct = await pool.query(`
      INSERT INTO productos (nombre, descripcion, precio, descuento, stock, fragancia_id, imagen)
      VALUES ('Producto Actualizable', 'Descripción del producto actualizable', 100.00, 5.00, 20, $1, 'imagen_actualizable.jpg')
      RETURNING *;
    `, [fraganciaId]);

    const updatedProduct = {
      nombre: 'Producto Actualizado',
      descripcion: 'Descripción actualizada',
      precio: 80.00,
      descuento: 15,
      stock: 100,
      fragancia_id: fraganciaId,
      imagen: 'imagen_actualizada.jpg'
    };

    const response = await request(app)
      .put(`/api/perfumes/${newProduct.rows[0].id}`)
      .send(updatedProduct);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('nombre', 'Producto Actualizado');
  });
});
