const pool = require('./db')


pool.query('SELECT * FROM users', (error, results) => {
    console.log(`Connecting to the database: ${pool.options.database} on ${pool.options.host}`);

    if (error) {
        throw error
    }
    console.log(results.rows)
})