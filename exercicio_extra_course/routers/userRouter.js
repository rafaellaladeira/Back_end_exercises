
const userRouter = require('express').Router();
const {validationEmail, validationName, validationPassword} = require('../middlewares/validationMiddleware');

userRouter.post('/register',
    validationEmail,
    validationName,
    validationPassword,
     (req, res)=> res.status(201).json({ message: 'user created' }),
    );

module.exports = userRouter;