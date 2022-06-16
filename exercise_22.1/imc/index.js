const readline = require('readline-sync');
const imcCalc = require('./calculatorIMC');

const name = readline.question('Qual o seu nome? ');
const askWeight = readline.questionFloat('Qual o seu peso? ');
const askHigh = readline.questionFloat('Qual a sua altura? ');
const imc = imcCalc(askWeight, askHigh);

console.log(` \n Nome: ${name}; \n Peso: ${askWeight}; \n Altura: ${askHigh}; \n IMC: ${imc}`);