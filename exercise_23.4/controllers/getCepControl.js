const service = require("../services/cepServices");

const getCepControl =  async (req, res)=> {
    try {
        const { cep } = req.params;
        const data  = await service.getCepService(cep);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json('CEP não encontrado');
    }
}

const postCepControl = async (req, res) => {

    try {
        const { cep, logradouro, bairro, localidade, uf} = req.body;
        const data = await service.postCepService(cep, logradouro, bairro, localidade, uf)
        return res.status(200).json(data)
    } catch(error) {
        return res.status(404).json({message: 'fail'})
    }
}

module.exports = {
    getCepControl,
    postCepControl
}