const express = require('express');
const pingRouter= require('./routers/pingRouter');
const cepRouter = require('./routers/cepRouter');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/ping', pingRouter);
app.use('/cep', cepRouter)

app.listen(port, () => {
    console.log(`Estou na porta ${port}`);
})