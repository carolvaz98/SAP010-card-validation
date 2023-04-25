import validator from './validator.js';

console.log(validator);
 

  
  const button = document.getElementsById("submit");

  button.addEventListener("click", () => {

  const codigoCartao = document.getElementById("inputcodigoCartao").value;
  const nomecomplet = document.getElementById("inputcodigoNome").value;

    
  const codigoMascarado = validator.maskify(codigoCartao);
  const valido = validator.isValid(codigoCartao);

  if (valido) {
    alert(`Obaa! ${nomecomplet}, sua compra no cartão ${codigoMascarado} foi aprovada com sucesso.`);
  } else {
    alert(`Olá, ${nomecomplet}! O número de cartão ${codigoMascarado} é inválido. Verifique os dados adicionados e tente novamente.`);
  }


});










/*const codigoCartaoInput = document.getElementById("inputcodigoCartao");
const validarButton = document.getElementById("submit");

validarButton.addEventListener("click", function() {
  
  const codigoCartao = codigoCartaoInput.value;

  if (validator.isValid(codigoCartao)) {
    alert("O número do cartão é válido!");
  } else {
    alert("O número do cartão é inválido!");
  }
});*/


















  /*document.getElementById("submit").addEventListener("click", () => {

  });

  const codigoCartao = document.getElementById("inputcodigoCartao").value;
  const nomecompleto = document.getElementById("inputcodigoNome").value
  const codigoMascarado = validator.maskify(codigoCartao);
  const codigovalido = validator.isValid(codigoCartao);

  if (codigovalido) {
  alert(`Obaa! ${nomecompleto}, sua compra no cartão ${codigoMascarado} foi aprovada com sucesso.`);
  } else {
  alert(`Olá, ${nomecompleto}! O número de cartão ${codigoMascarado} é inválido. Verifique os dados adicionados e tente novamente.`);
  
  }

    
  console.log(`Nome Completo: ${nomecomplet}`);
  console.log(`Código do Cartão: ${codigoCartao}`);
  console.log(`Código de Cartão (Mascarado): ${codigoMascarado}`);
  console.log(`Cartão Válido: ${codigovalido}`);

  console.log(validator);*/
  
/*document.getElementById("submit").addEventListener("click", () => {
  let codigocartao = document.getElementById("inputCardNumber").value;
  printValidationStatus(validator.isValid(codigoCartao));

});

function printValidationStatus(cardNumberIsValid) {
  cardNumberIsValid ? document.getElementById("cardNumberValidationStatus").innerHTML = `Obaa! ${nomecompleto}, sua compra no cartão ${codigoMascarado} foi aprovada com sucesso.`:
   document.getElementById("cardNumberValidationStatus").innerHTML = `Olá, ${nomecompleto}! O número de cartão ${codigoMascarado} é inválido. Verifique os dados adicionados e tente novamente.`;
}*/


