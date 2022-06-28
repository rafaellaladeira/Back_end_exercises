const joi = require('joi');


const regexCep = /\d{5}-?\d{3}/

const cepp = joi.object({
    cep: joi.number().regex(regexCep).required()
})

const cepValidation = (req, res, nex) => {
    const {error} = cepp.validate(req.body, {abortEarly: false});
    if(error) {
        const message = "aqui não";
        return res.status(401).json({message})
    }
    return next();
}

module.exports = {
    cepValidation
}