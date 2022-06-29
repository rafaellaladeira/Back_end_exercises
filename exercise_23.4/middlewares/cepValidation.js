const cepValidation = (req, res, next) => {
    const { cep } = req.params;
    const regexCep = /^\d{5}-?\d{3}$/
    if (cep.length !== 8 || !cep.match(regexCep)) {
        return res.status(400).json({ "message": "CEP inválido"})
    }
    return next();
}

module.exports = cepValidation;