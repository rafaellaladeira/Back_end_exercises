import { Router } from 'express';

const routers = Router();

routers.get("/", (req, res) => {
    res.status(200).send('Up and running')
})

export default routers;