const { Router } = require('express');
const services = require('../services/ping_services');

const pingRouter = Router();

pingRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await services.ping(id);
        console.log(data);
        return res.status(200).json(data)

    } catch(error){
        return res.status(400).json(error.message);
    }
    
})

module.exports = pingRouter;