const DB_TYPE = process.env.DB_TYPE || 'sqlite';

let pool;
if (DB_TYPE === 'postgres') {
  const { Pool } = require('pg');
  pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'testuser',
    password: process.env.DB_PASSWORD || 'testpass',
    database: process.env.DB_NAME || 'testdb',
  });
} else if (DB_TYPE === 'mysql') {
  const mysql = require('mysql2/promise');
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'testuser',
    password: process.env.DB_PASSWORD || 'testpass',
    database: process.env.DB_NAME || 'testdb',
  });
} else {
  const sqlite3 = require('sqlite3').verbose();
  const { open } = require('sqlite');
  pool = open({
    filename: ':memory:',
    driver: sqlite3.Database,
  });
}

module.exports = pool;