const express = require('express');
const app = express();
app.use(express.json());
const  pingRouter = require('./routers/ping');

const port = process.env.PORT || 3000;

app.use('/ping', pingRouter);

app.listen(port, () => {
    console.log(`Estou na porta ${port}`);
})