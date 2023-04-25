const validator = {

  maskify: function (codigoCartao) {
    const caracteresEscondidos = 12;
    const caracteresVisiveis = codigoCartao.length - caracteresEscondidos;
    const caracteresEscondidosStr = "#".repeat(caracteresEscondidos);
    const caracteresVisiveisStr = codigoCartao.slice(-caracteresVisiveis);
    return caracteresEscondidosStr + caracteresVisiveisStr;
  },

  isValid: function (codigoCartao) {

  const numeroCartaoLimpo = codigoCartao.replace(/\D/g, "");
  if (numeroCartaoLimpo.length < 16 || numeroCartaoLimpo.length > 16) {
  return false;
    }
  
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
}
export default validator;


  /*split("") é usado para converter uma string em um array de caracteres 
  reverse() é usado para inverter a ordem do array, a soma dos dígitos comece com o último dígito do número
  reduce()um acumulador, que armazena(sum) o valor da operação, e somar com o valor do elemento atual (d).
  "acc" é o acumulador que mantém a soma atual
  "digit" é o dígito atual 
  "idx" é o índice atual no array.

  1- Ela transforma o número em uma string, 
  2- separa cada dígito em um array
  3- soma os valores do array para obter o resultado final.*/