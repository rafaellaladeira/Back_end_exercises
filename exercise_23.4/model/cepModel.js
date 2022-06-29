const connection = require('../db/connection');

const getCepModel = async (cep) => {
    const query = 'SELECT * FROM ceps WHERE cep=?;'
    const [data] = await connection.execute(query, [cep]);
    return data[0];
} 

const postCepModel = async (cep, logradouro, bairro, localidade, uf) => {
    const query = 'INSERT FROM ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?);'
    const [data] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
    console.log(data);
    return data;
}

module.exports = {
    getCepModel,
    postCepModel
}