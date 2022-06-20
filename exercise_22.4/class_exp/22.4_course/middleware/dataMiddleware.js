const fs = require('fs').promises;

module.exports = async (req, res, next) => {
    try{
        const {id} = req.body
        console.log(id);
        const response = await fs.readFile('./simpsons.json', 'utf8');
        const data = JSON.parse(response);
        
        if(data.some((simp)=> Number(simp.id) == Number(id))) {  // + -> string em numero
            return res.status(400).json({message: 'Id já existe'})
        }
        return next();

    } catch(error) {
        return res.status(400).json({message: 'Dá não , filha'})
    }
}