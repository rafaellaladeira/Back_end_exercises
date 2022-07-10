const express = require('express');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const port = 3001;

const app = express();
app.use(express.json());


app.use('/books', routes);
app.use(errorMiddleware);


app.listen(port, ()=> {
    console.log(`Estou na porta ${port}`);
})