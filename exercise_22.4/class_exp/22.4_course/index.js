const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (request, response)=> {
    response.json({message: 'pong'});
})

app.post('/hello', (request, response) => {

    const {name} = request.body

    response
        .status(200)
        .json({message: `Hello ${name}`})
})

app.post('/greetings', (req, res)=> {
    const {name, age} = req.body;

    if(Number(age)<=17) {
        return res
            .status(401)
            .json({message: 'Unauthorized'})
    }
    return res.status(200).json({message: `Hello, ${name}`})
})

app.put('/users/:name/:age', (req, res)=> {
    const {name, age} = req.params;

    res
        .status(200)
        .json({message: `Seu nome é ${name} e você tem ${age} anos de idade`})
})



app.listen(port, () => {
    console.log('Você está acessando a porta 3000');
})

