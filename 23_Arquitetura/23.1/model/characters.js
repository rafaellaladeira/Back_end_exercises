const connection = require('../db/connection');

// Funções que consultam o banco de dados - sql

const getAll = async () => {
    const query = 'SELECT * FROM customer';
    const data = await connection.execute(query);
    return data;
}

module.exports = getAll;