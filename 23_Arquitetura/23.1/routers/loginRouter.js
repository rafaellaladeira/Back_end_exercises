const characterControl = require('../controllers/characters');
const { Router } = require('express');

const loginRouter = Router();

loginRouter.use('/login', characterControl);

