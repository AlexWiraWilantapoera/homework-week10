const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hw10",
  password: "postgres",
  port: 5432,
});

module.exports = pool;
