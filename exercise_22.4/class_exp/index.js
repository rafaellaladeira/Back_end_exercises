const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const recipes = [
    { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  ];

// app.get('/welcome', (request, response) => {
//     console.log(response);

//     response
//         .status(200)
//         .json(recipes) // 
// });

//.send() => é um método que consegue retornar a resposta
// de uma requisição de uma forma genérica.

app.get('/recipes/:id', (req, res)=> {
    const {id} =req.params;
    const recipe = recipes.find((rec) => rec.id === Number(id));
    
    if(!recipe) return res.status(400).json({message: 'Id não encontrado'});

   res.status(200).json(recipe)
})

app.listen(port, ()=> {
    console.log('subiu na porta 3000');
})
