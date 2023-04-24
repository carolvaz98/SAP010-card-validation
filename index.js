import validator from './validator.js';

console.log(validator);


function maskify(codigoCartao) {

  const caracteresEscondidos = 12;
  const caracteresVisiveis = codigoCartao.length - caracteresEscondidos;
  const caracteresEscondidosStr = "🐱".repeat(caracteresEscondidos);
  const caracteresVisiveisStr = codigoCartao.slice(-caracteresVisiveis);
  return caracteresEscondidosStr + caracteresVisiveisStr;
}

function isValid(codigoCartao) {

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

function validarCartao() {
  const codigoCartao = document.getElementById("inputcodigoCartao").value;
  const codigoMascarado = maskify(codigoCartao);
  const valido = isValid(codigoCartao);

  if (valido) {
    alert(`O número de cartão ${codigoMascarado} é válido.`);
  } else {
    alert(`O número de cartão ${codigoMascarado} é inválido.`);
  }
}