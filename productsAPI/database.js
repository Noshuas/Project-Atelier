const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  database: 'products',
  user: 'yurgandurgan',
  password: 'ay78Dnn2lg0sj9nk3l]3',
  port: 5432,
  idleTimeoutMillis: 10000,
});

module.exports = {


}