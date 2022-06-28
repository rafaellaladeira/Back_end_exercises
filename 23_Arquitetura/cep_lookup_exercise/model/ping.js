const connection = require('../db/connection')

const getAll = async (id) => {
    const query = 'SELECT * FROM actor WHERE actor_id=?;'
    console.log(query);
    const [data] =  await connection.execute(query, [id]);
    return data;
}

module.exports = {
    getAll
}