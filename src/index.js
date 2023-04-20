import validator from './validator.js';

console.log(validator);

// Cria uma matriz de números
const numeros = [0,1,2,3,4,5,6,7,8,9];

// Cria uma nova matriz vazia para armazenar os números pares multiplicados por 2
const numerosParesMultiplicados = [];

// Loop for para percorrer todos os números na matriz original
for (let i = 0; i < numeros.length; i++) {

const numero = numeros[i]

// Verifica se o número é par usando o operador módulo (%)
if (numero % 2 === 0) {

// Se o número for par, multiplique-o por 2 e adicione-o à nova matriz
    const numeroMultiplicado = numero * 2;

    numerosParesMultiplicados.push(numeroMultiplicado);
    
}
    
    
}