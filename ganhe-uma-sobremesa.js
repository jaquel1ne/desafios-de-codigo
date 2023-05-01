// Desafio
// Crie um programa que informe ao usuário se ele pode receber um brinde especial de acordo com o valor total do pedido.
// Se o valor total do pedido for maior ou igual a R$ 50.00, o usuário receberá uma sobremesa grátis.
// Caso contrário, o usuário não receberá nenhum brinde.
// Entrada:
// A entrada deverá receber o valor total do pedido em uma variável numérica:
// valorPedido: o valor do pedido.
// Saída:
// Deverá retornar uma mensagem (string) que informa se o usuário ganhou uma sobremesa ou não.


const prompt = require('prompt-sync')();

const valorPedido = parseInt(prompt());

console.log(valorPedido >= 50 ? "Parabens, você ganhou uma sobremesa gratis!" 
            : "Que pena, você nao ganhou nenhum brinde especial.");
