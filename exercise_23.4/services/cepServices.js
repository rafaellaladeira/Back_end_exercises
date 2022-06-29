const model = require('../model/cepModel');

const getCepService = async (cep) => {
    const data = await model.getCepModel(cep);
    return data;
}

const postCepService = async (cep, logradouro, bairro, localidade, uf) => {
    const data = await model.postCepModel(cep, logradouro, bairro, localidade, uf);
    return data;
}

module.exports = {
    getCepService,
    postCepService
}