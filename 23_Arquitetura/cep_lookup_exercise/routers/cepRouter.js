const { Router } = require('express');

const cepRouter = Router();

cepRouter.get('/:cep', (req, res) => {
    const { cep } = req.params;
    try{
        return 
    } catch(error) {

    }
    
})

module.exports = cepRouter;