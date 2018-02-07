const { Pool } = require('pg');
require('env2')('./config.env');

const dbUrl = process.env.DB_URL_LOCAL;

if (!dbUrl) throw new Error('Ereror connecting to database');

const pool = new Pool({
  connectionString: dbUrl,
  ssl: true
});

module.exports = pool;
