import request from 'supertest';
import app from '../../server'; 
import { pool } from '../../database/config'; 

let token = '';

afterAll(async () => {
  
  await pool.end();
});

describe('Pruebas de autenticación y rutas protegidas', () => {
  
  
  test('Registro de un nuevo usuario', async () => {
    const response = await request(app)
      .post('/api/register')  
      .send({
        nombre: 'Test',
        apellido: 'User',
        email: 'testuser@example.com',
        contrasena: 'password123',
        direccion: '123 Test St',
        telefono: '1234567890',
        rol: 'user'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('email', 'testuser@example.com');
  });

  
  test('Inicio de sesión con un usuario existente', async () => {
    const response = await request(app)
      .post('/api/login')  
      .send({
        email: 'testuser@example.com',
        contrasena: 'password123'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
    
    
    token = response.body.token;
  });

  
  test('Acceso a una ruta protegida sin token', async () => {
    const response = await request(app).get('/api/protected-route');  

    expect(response.statusCode).toBe(401);
    expect(response.body).toHaveProperty('message', 'Token no proporcionado');
  });

  
  test('Acceso a una ruta protegida con token válido', async () => {
    const response = await request(app)
      .get('/api/protected-route')  
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Acceso concedido');
  });
});
