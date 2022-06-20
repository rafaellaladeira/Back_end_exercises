const express = require('express');
const userRouter = require('./routers/userRouter');
const port = 3000;
const app = express();
app.use(express.json());

app.use('/user', userRouter);

app.listen(port, () => console.log('Estou na porta 3000'));