const fs = require('fs').promises;

const getAllSimpsons = async () => {
    const response  = await fs.readFile('./simpsons.json', 'utf8')
    const simpsons = JSON.parse(response);
    const strings = simpsons.map(({id, name}) => `${id} - ${name}`);

    strings.forEach((string) => console.log(string));
}

function main() {
    getAllSimpsons();
}
main();
//______________________________________________________________________________

const getSimpsonById = async (id2) => {
    const response = await fs.readFile('./simpsons.json', 'utf8');
    const simpsons = JSON.parse(response);

   const chosen = simpsons.filter(({id})=> id == id2);

   if(!chosen) throw new Error('id não encontrado');

   return chosen
}


async function main(){
    const simpson = await getSimpsonById(1);
    console.log(simpson);
}
main();
//____________________________________________________________

const removingSimpsons = () => {
    const response = await fs.readFile('./simpsons.json', 'utf8');
    const simpson = JSON.parse(response);

    const newArray = simpson.filter(({id})=> id !== 10 && id !== 6);

    await fs.writeFile('./simpsons.json', JSON.stringify(newArray)); //writefile sobrepõe tudo
}

async function main() {
    removingSimpsons();
}
___________________________________________________________________________

const creatingNewFile = async() => {
    const response = await fs.readFile('./simpsons.json', 'utf8');
    const simpson = JSON.parse(response);


    const arrayId = [ 1, 2, 3 ,4];
    const newTeste = simpson.filter(({id})=> arrayId.includes(Number(id)));
    
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newTeste));
}

async function main() {
   await creatingNewFile();
}
main();

__________________________________________________

const putName = async () => {
    const response = await fs.readFile('./simpsonFamily.json', 'utf8');
    const simpson = JSON.parse(response);

    const nameNelson = {
        id: 5,
        name: 'Nelson Muntz'
    } 
    simpson.push(nameNelson);

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpson))
}

async function main() {
    await putName();
}
main();

//_______________________________________________________

const changingName = async () => {
    const response = await fs.readFile('./simpsonFamily.json', 'utf8');
    const simpson = JSON.parse(response);
    const nameN = "Nelson Muntz";

    const get = simpson.filter(({name}) => name !== nameN);
    console.log(get);
    get.push({id: 5, name: 'Maggie Simpson'})

    // const nameMaggie = {
    //     id: 5,
    //     name: 'Maggie Simpson'
    // }
    
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(get));
}

async function main(){
    await changingName();
}
main();
