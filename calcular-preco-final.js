// Desafio
// Você está criando um aplicativo de entrega de comida e precisa calcular o preço final do pedido do usuário.
// O usuário escolheu alguns itens do cardápio e é preciso calcular o preço total do pedido.
// A entrada deve receber os valores abaixo:
// valorHamburguer: o valor unitário de um hambúrguer.
// quantidadeHamburguer: a quantidade de hambúrgueres que o usuário deseja.
// valorBebida: o valor unitário de uma bebida.
// quantidadeBebida: a quantidade de bebidas que o usuário deseja.
// valorPago: o valor pago pelo usuário.
// Saída:
// A saída deve retornar um texto informando o valor total do pedido e a quantidade de troco que será necessário.


const prompt = require('prompt-sync')();

const valorHamburguer = parseFloat(prompt());
const quantidadeHamburguer = parseInt(prompt());
const valorBebida = parseFloat(prompt());
const quantidadeBebida = parseInt(prompt());
const valorPago = parseFloat(prompt());

const precoTotal = (valorHamburguer * quantidadeHamburguer) + (valorBebida * quantidadeBebida);
const troco = valorPago - precoTotal;

console.log(`O preço final do pedido é R$ ${precoTotal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`);