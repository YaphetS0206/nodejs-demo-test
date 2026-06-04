const db = require('../../src/db');

describe('Database integration', () => {
  beforeAll(async () => {
    if (process.env.DB_TYPE === 'sqlite') {
      await db.exec('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)');
    } else {
      await db.query(`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255)
      )`);
    }
  });

  test('should insert and retrieve user', async () => {
    await db.query('INSERT INTO users (name) VALUES ($1)', ['Juan']);
    const res = await db.query('SELECT * FROM users');
    expect(res.rows[0].name).toBe('Juan');
  });
});