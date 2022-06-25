const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const routers = require('./routers');
app.use(routers);

app.listen(port, () => {
    console.log(`Estou na porta ${port}`);
})