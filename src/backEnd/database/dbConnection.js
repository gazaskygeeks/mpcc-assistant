const { Pool } = require('pg');
require('env2')('./config.env');

const dbUrl = process.env.DB_TEST_REMOTE;

if (!dbUrl) throw new Error('Ereror connecting to database');

const pool = new Pool({
  connectionString: dbUrl,
  ssl: true
});

module.exports = pool;
