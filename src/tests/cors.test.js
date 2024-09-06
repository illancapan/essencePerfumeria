import request from 'supertest';
import app from '../../server.js'; // Asegúrate de que el path sea correcto

describe('Pruebas de CORS', () => {
  test('Debe permitir peticiones desde cualquier origen (CORS)', async () => {
    const response = await request(app)
      .get('/api/protected-route')  // Ruta protegida o cualquier ruta de tu API
      .set('Origin', 'http://example.com'); // Simulamos una petición desde otro dominio

    expect(response.headers['access-control-allow-origin']).toBe('*'); // Verificamos que CORS permita el acceso
  });

  test('Debe incluir las cabeceras de CORS apropiadas', async () => {
    const response = await request(app)
      .options('/api/protected-route')  // Método OPTIONS para verificar preflight requests
      .set('Origin', 'http://example.com')
      .set('Access-Control-Request-Method', 'GET'); // Simula una solicitud preflight

    // Verificamos que las cabeceras CORS estén presentes
    expect(response.headers['access-control-allow-methods']).toContain('GET');
    expect(response.headers['access-control-allow-origin']).toBe('*');
  });
});
