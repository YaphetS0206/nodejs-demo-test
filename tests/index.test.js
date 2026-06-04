const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  test('GET /health returns 200 and status OK', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('GET /greet/:name returns personalized message', async () => {
    const name = 'Juan';
    const response = await request(app).get(`/greet/${name}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', `Hello, ${name}!`);
  });

  test('GET /greet/empty returns message with empty string', async () => {
    const response = await request(app).get('/greet/');
    expect(response.statusCode).toBe(404); // Express devuelve 404 porque el parámetro está vacío
  });
});