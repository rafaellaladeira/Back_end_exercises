const express = require('express');
const fs = require('fs').promises;
const dataMiddleware = require('./middleware/dataMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
app.use(express.json()); // pra descriptografar - para todas as rotas

const port = 3000;

// app.get('/simpsons', async (req, res) => {
//     try{
//         const response = await fs.readFile('./simpsons.json', 'utf8')
//         const data = JSON.parse(response)
//         return res.status(201).json(data);
//     }catch{
//         return res.status(500).json({message : 'Something is wrong'})
//     }

// }) 

// app.get('/simpsons/:id', async (req, res)=> {
//     try{
//         const {id} = req.params;
//         const response = await fs.readFile('./simpsons.json', 'utf8');
//         const data = JSON.parse(response);

//         const findingSimpson = data.find((simpson)=>Number(simpson.id) == id);
//         console.log(findingSimpson);

//         if(!findingSimpson) return res
//                 .status(404)
//                 .json({message: 'simpson not found'})
//         return res.json(findingSimpson);
//     } catch (error){
//         return res.status(500).end();
//     }
// })
   
app.post('/simpsons', dataMiddleware,
(req, res, next) => {
    next();
},
 async (req, res)=> {
    try{
        const {id, name} = req.body;
        const response = await fs.readFile('./simpsons.json', 'utf8');
        const data = JSON.parse(response);

        data.push({id, name});
        await fs.writeFile('./simpsons.json', JSON.stringify(data));
        return res.status(204).json({message: 'simp criado com sucesso'})
    } catch(error) {
        return res.status(500).end();
    }
})

app.use(errorMiddleware);

app.listen(port, ()=> {
    console.log('Rodando porta dos simps');
})

// sempre lembrar de colocar RETURN pra evitar loop;

// O front vai deixar indicado o post, que vai chegar no back pelo BODY

//Para simulação no body => colocar a object.key entre aspas

// Criando uma pasta de rotas: No index: app.use('/', require('./routes'))

// o middleware é igual à validação de if da info recebida pelo body

// Quando tiver parâmetro dentro do next, ele será direcionado para o middleware do parâmetro

// o app.use(errorMiddleware) tem q ser colocado por último, pra não cair 
// dentro dele

// app.post('/simpsons', async (req, res)=> {
//     try{
//         const {id, name} = req.body;
//         const response = await fs.readFile('./simpsons.json', 'utf8');
//         const data = JSON.parse(response);

//         if(data.some((getSimp)=> getSimp.id == id)) {
//             return res.status(409).json({message: 'id already exists'});
//         }
//         data.push({id, name});
//         await fs.writeFile('./simpsons.json', JSON.stringify(data));
//         return res.status(204).end();
//     } catch(error) {
//         return res.status(500).end();
//     }
// })