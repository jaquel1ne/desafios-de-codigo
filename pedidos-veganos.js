// Desafio
// O programa deve solicitar ao usuário o número de pedidos que serão feitos e, em seguida, 
// pedir informações sobre cada pedido,  incluindo se o prato é vegano ou não 
// (usando as opções "s" para sim e "n" para não) e a quantidade de calorias
// Ao final, o programa deve exibir uma lista de todos os pedidos com suas informações correspondentes.
// Entrada:
// Um inteiro n, que representa o número de pedidos que o usuário deseja fazer.
// Para cada pedido, o usuário deve inserir: O nome do prato; A quantidade de calorias do prato; 
// Se o prato é vegano ou não (usando as opções "s" para sim e "n" para não).
// Saída:
// O programa deve exibir uma lista de todos os pedidos com suas informações correspondentes,
// incluindo o nome do prato, se é vegano ou não, e a quantidade de calorias.


const prompt = require('prompt-sync')();

const numPedidos = parseInt(prompt());

for (let i = 1; i <= numPedidos; i++) {
  const prato = prompt();
  const calorias = parseInt(prompt());
  const ehVegano = prompt().toLowerCase() === 's';

   
  console.log(`Pedido ${i}: ${prato} (${ehVegano ? 'Vegano' : 'Não vegano'}) - ${calorias} calorias`);
}
  