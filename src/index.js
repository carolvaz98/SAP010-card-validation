import validator from './validator.js';

const inputnome = document.getElementById("inputcodigoNome");
const inputcodigo = document.getElementById("inputcodigoCartao");
const nomecartao = document.getElementById("nomenocartao");
const numerocartao = document.getElementById("numeronocartao");

inputnome.addEventListener('keyup', () => {
  nomecartao.innerHTML = inputnome.value;
});

inputcodigo.addEventListener('keyup', () => {
  numerocartao.innerHTML = inputcodigo.value;
});

document.getElementById("submit").addEventListener("click", () => {

  const codigoMascarado = validator.maskify(inputcodigo.value);
  const codigovalido = validator.isValid(inputcodigo.value);

  const numerovazio = inputcodigo.value;
  const nomevazio = inputnome.value;

  if (numerovazio === "" || nomevazio === "") {
    alert("Por favor, preencha todos os campos obrigatórios para verificar o status do seu cartão de crédito.");
    return false;
  }

  if (codigovalido) {
    alert(`Obaa! Identificamos que o seu cartão ${codigoMascarado} é válido, portanto, poderá realizar compras com a agência eTrip World 😎😎.`);
  } else {
    alert(`O número do cartão ${codigoMascarado} é inválido. Verifique os dados adicionados e tente novamente.`);
  }

});
















/*if (numeroCartaoLimpo.length < 16 || numeroCartaoLimpo.length > 16) {
      return false;*/


/*console.log(`Nome Completo: ${inputnome}`);
console.log(`Código do Cartão: ${codigoCartao}`);
console.log(`Código de Cartão (Mascarado): ${codigoMascarado}`);
console.log(`Cartão Válido: ${valido}`);*/


/*const nometarjeta = document.querySelector('#tarjeta .nome')

  formulario.inputcodigoNome.addEventListener('keyup', (e) => {
    let valorinput = e.target.value;

    formulario.inputcodigoNome.value = valorinput

    nometarjeta.textContent = valorinput
    if(valorinput == '') {

      nometarjeta.textContent = '********** ***** ';

    }

});*/
















/*const tarjeta = document.querySelector('#tarjeta');

tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle('active');
});


inputcodigoCartao.addEventListener('keyup', (e) => {
    let valorinput = e.target.value;

    inputcodigoCartao.value = valorinput

});*/



/*function digitnome() {
  const nomeformulario = document.getElementById("inputcodigoNome")
  const descricaonome = document.getElementById("nomecartao").value;
  nomecartao.innerHTML = `${inputcodigoNome}`;
  }*/