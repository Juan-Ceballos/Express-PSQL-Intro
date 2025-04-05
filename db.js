const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'JUostgres@08',
    port: 5432
})
console.log(`Connecting to the database: ${pool.options.database} on ${pool.options.host}`);

module.exports = pool