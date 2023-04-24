const validator = {
  // ...
};

export default validator;



function maskify(codigoCartao) {
  const numeroCartaoMascarado = (validator.maskify(numeroCartao));
  console.log(numeroCartaoMascarado);

  const caracteresEscondidos = 4;
  const caracteresVisiveis = codigoCartao.length - caracteresEscondidos;
  const caracteresEscondidosStr = "#".repeat(caracteresEscondidos);
  const caracteresVisiveisStr = codigoCartao.slice(-caracteresVisiveis);
  return caracteresEscondidosStr + caracteresVisiveisStr;
}


function isValid(codigoCartao) {
  const numeroCartaoValido = (validator.isValid(numeroCartao));
  console.log(numeroCartaoValido);

  const numeroCartaoLimpo = codigoCartao.replace(/\D/g, "");
  if (numeroCartaoLimpo.length < 16 || numeroCartaoLimpo.length > 16) {
    return false;
}

/*split("") é usado para converter uma string em um array de caracteres 
reverse() é usado para inverter a ordem do array, a soma dos dígitos comece com o último dígito do número
reduce()um acumulador, que armazena(sum) o valor da operação, e somar com o valor do elemento atual (d).
"acc" é o acumulador que mantém a soma atual
"digit" é o dígito atual 
"idx" é o índice atual no array.

1- Ela transforma o número em uma string, 
2- separa cada dígito em um array
3- soma os valores do array para obter o resultado final.*/

   const somaDigitos = numeroCartaoLimpo.split("").reverse().reduce((acc, digit, idx) => {
   const valor = parseInt(digit, 10);
  if (idx % 2 === 0) {
    acc += valor;
} else {
   const resultadoMultiplicacao = valor * 2;
    acc += resultadoMultiplicacao > 9 ? resultadoMultiplicacao.toString().split("").reduce((sum, d) => sum + parseInt(d), 0) : resultadoMultiplicacao;
}
  return acc;
  }, 0);

  return somaDigitos % 10 === 0;
}



















/*const codigoCartao = "1234567890123456";
const codigoCartaoMascarado = maskify(codigoCartao);
  console.log(codigoCartaoMascarado);

const numeroCartaoValido = isValid(codigoCartao);
  console.log(numeroCartaoValido);*/


 /*module.exports.isValid = isValid;
 module.exports.maskify = maskify;*/

















