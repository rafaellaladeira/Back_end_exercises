const { Router } = require('express');

const pingRouter = Router();

pingRouter.get('/', (_req, res) => {
   return res.status(200).json({message: 'Pong!'})
})

module.exports = pingRouter;