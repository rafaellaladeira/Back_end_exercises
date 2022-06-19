const express = require('express');
const fs = require('fs').promises;

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
   
app.post('/simpsons', async (req, res)=> {
    try{
        const {id, name} = req.body;
        const response = await fs.readFile('./simpsons.json', 'utf8');
        const data = JSON.parse(response);


        if(data.some((getSimp)=> getSimp.id == id)) {
            return res.status(409).json({message: 'id already exists'});
        }
        data.push({id, name});
        await fs.writeFile('./simpsons.json', JSON.stringify(data));
        return res.status(204).end();
    } catch(error) {
        return res.status(500).end();
    }
})

app.listen(port, ()=> {
    console.log('Rondando porta dos simps');
})

// sempre lembrar de colocar RETURN pra evitar loop;

// O front vai deixar indicado o post, que vai chegar no back pelo BODY

//Para simulação no body => colocar a object.key entre aspas