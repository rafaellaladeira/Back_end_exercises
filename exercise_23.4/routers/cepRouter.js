const { Router } = require('express');
const control = require('../controllers/getCepControl');
const cepValidation = require('../middlewares/cepValidation');

const cepRouter = Router();


cepRouter.get('/:cep', cepValidation, control.getCepControl);
cepRouter.post('/', control.postCepControl)


module.exports = cepRouter;