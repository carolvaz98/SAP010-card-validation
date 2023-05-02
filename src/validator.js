const validator = {

  maskify: function (codigoCartao) {
    const caractere = '#'; // caractere de máscara
    const numerosvisiveis = 4; // número de caracteres visíveis no final

    if (codigoCartao.length <= numerosvisiveis) { //se tiver apenas 1 digito retorna a própria string sem nenhum mascaramento
      return codigoCartao;
    }
    const mascarar = codigoCartao.length - numerosvisiveis; // número de caracteres a mascarar
    const resultado = caractere.repeat(mascarar) + codigoCartao.slice(-numerosvisiveis);//deixar visivel os 4 ultimos

    return resultado
  },



  isValid: function (codigoCartao) {

    const digits = codigoCartao.toString().split("").reverse().map(Number);

    let soma = 0;

    for (let i = 0; i < digits.length; i++) {
      const valor = digits[i];

      if (i % 2 === 1) {
        const resultadoMultiplicacao = valor * 2;

        soma += resultadoMultiplicacao > 9 ? resultadoMultiplicacao.toString().split('').reduce((soma, caractere) => soma + parseInt(caractere), 0) : resultadoMultiplicacao;
        //O "reduce" percorre a array, separando os numeros//o parseInt altera o caractere para num inteiro, para que assim seja realizada a soma

      } else {
        soma += parseInt(valor);

      }
    }

    return soma % 10 === 0;

  }
}
export default validator;



















/*const caracteresVisiveis = codigoCartao.length - caracteresEscondidos;
const caracteresEscondidosStr = codigoCartao.replace(/\d(?=\d{4})/g, "#");
const caracteresVisiveisStr = codigoCartao.slice(-4);
return caracteresEscondidosStr + parseInt(caracteresVisiveisStr);*/

/*const caracteresEscondidos =
const caracteresVisiveis = codigoCartao.slice(-4);
return caracteresEscondidos + caracteresVisiveis;*/

/* isValid: function (codigoCartao) {
   const somaDigitos = codigoCartao.split("").reverse().reduce((acc, digit, idx) => {
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

export default validator;*/






/*isValid: function (codigoCartao) {
 
  const digitoscartao = codigoCartao.split("").reverse();
  let soma = 0;
 
  for (let i = 0; i < digitoscartao.length; i++) {
    const valor = digitoscartao[i];
 
    if (i % 2 === 0) {
      const multiplicacao = valor * 2;
      
      const resultadoMultiplicacao = multiplicacao > 9 ? multiplicacao.toString().split('').reduce((soma, caracteres) => soma + parseInt(caracteres), 0) : multiplicacao;
      
      soma += resultadoMultiplicacao; 
 
    } else {
      soma += valor;
 
    }
  }
 
  return soma % 10 === 0;
}
}
 
export default validator;*/


