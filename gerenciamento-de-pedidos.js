// Desafio
// O sistema deve permitir ao cliente inserir novos pedidos, escolher um cupom de desconto (10% ou 20%) 
// e exibir o valor total de todos os pedidos realizados até o momento, com o desconto aplicado. 
// Entrada:
// Uma linha com um número inteiro n representando a quantidade de pedidos que o usuário deseja inserir;
// n linhas, cada uma contendo uma string com o nome do pedido e um valor em ponto flutuante separados por espaço.
// O nome do pedido não contém espaços em branco;
// Uma linha contendo o cupom de desconto escolhido (10% ou 20%).
// Saída:
// O programa deve exibir uma única linha contendo o valor total de todos os pedidos com o desconto aplicado.

const prompt = require('prompt-sync')();

function calcularValorTotal(n, pedidos, cupom) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      let [nome, valor] = pedidos[i].split(' ');
      valor = parseFloat(valor);
      total += valor;
    }
    
    total = (cupom === '20') ? total * 0.8 : (cupom === '10') ? total * 0.9 : total;
  
    return total.toFixed(2);
  }
  
  const n = parseInt(prompt());
  const pedidos = [];
  for (let i = 0; i < n; i++) {
    pedidos.push(prompt());
  }
  const cupom = prompt().trim().slice(0, -1);
  
  const valorTotal = calcularValorTotal(n, pedidos, cupom);
  
  console.log(`Valor total: ${valorTotal}`);
