const mysql = require('mysql')

const pool = mysql.createPool ({
    connectionLimit: 10,
    user: 'root',
    password: '',
    database: 'stitch',
    host: 'localhost'
})

module.exports = pool