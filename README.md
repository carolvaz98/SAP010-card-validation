# Cartão de Crédito Válido

## Índice

* [1. Introdução](#1-Introdução)


* [2. Resumo do projeto](#2-resumo-do-projeto)


* [3. Considerações finais](#3-considerações-finais)

***

## 1. Introdução

Projeto realizado utilizando à base do algoritmo de Luhn, para validação de cartão de crédito. 

# Processos realizados para chegar ao objetivo principal:

**1- A ordem dos números deverá ser invertida, ou seja, o ultimo número do cartão passa a ser o primeiro;**

**2- Todos os números que ocuparem posições pares(começando pela casa 1), serão multiplicados por 2;**

**3- Se o resultado da multiplicação for maior ou igual a 10, este número será transformado em um array e somado pelo método reduce. Exemplo: o resultado da multiplicação foi 16, após a separação dos caracteres em um array, os números passam a ficar desta forma ["1","6"], após a aplicação do reduce, os números serão somados [1+6=7] e adicionados a uma variável (soma final);**

**4- Se o número estiver em posição impar, ele é adicionado diretamente a variável (soma final);**

**5- Se o resultado da variável (soma total) for um múltiplo de 10, o cartão será validado e todos os números deverão ser mascarados (exceto os 4 últimos digitos);**

**6- Se o resultado da soma total NÃO for um número múltiplo de 10, o resultado será "cartão de crédito inválido" e o site solicitará que o cliente digite algum número válido.**

## 2. Resumo do projeto

O projeto foi desenvolvido no VSCode. A interação do cliente com o site está no preenchimento dos campos "número do cartão", "nome completo" e o acionamento do botão "Confirmar". Com o preenchimento dos dois campos, o site gera informações do status do cartão deste usuário, se é válido ou inválido. 
Obs: Caso os campos não sejam devidamente preenchidos, a plataforma solicitará o preenchimento, alegando que o preenchimento é obrigatório.

# Mensagens de retorno:
* Cartão válido: "Obaa! Identificamos que o seu cartão  ${cartão de crédito mascarado} é válido, portanto, poderá realizar compras com a agência eTrip World 😎😎."

* Cartão inválido: "O número do cartão ${cartão de crédito mascarado} é inválido. Verifique os dados adicionados e tente novamente."

* Campos vázios: "Por favor, preencha todos os campos obrigatórios para verificar o status do seu cartão de crédito."


## 3. Considerações finais:

Realizei a criação de um aplicativo web, uma agência de viagens on-line chamada eTrip World, cuja a plataforma permite que os usuários consultem o status do cartão de crédito, que será utilizado em uma futura compra ficticia de algum pacote de viagem.

A logo "eTrip World" é um nome curto, simples e fácil de lembrar. Foi desenvolvido com o intuito de ter um tom moderno, tecnológico e está ligado diretamente aos termos viagem e turismo.