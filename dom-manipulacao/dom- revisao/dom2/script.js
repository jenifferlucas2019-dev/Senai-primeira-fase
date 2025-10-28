5.25

function cofrinho() {
  
  const valorProduto = parseFloat(prompt("Digite o valor do produto (R$):"));


  const moedas1 = parseInt(prompt("Digite a quantidade de moedas de 1 real:"));
  const moedas050 = parseInt(prompt("Digite a quantidade de moedas de 50 centavos:"));
  const moedas025 = parseInt(prompt("Digite a quantidade de moedas de 25 centavos:"));
  const moedas010 = parseInt(prompt("Digite a quantidade de moedas de 10 centavos:"));
  const moedas005 = parseInt(prompt("Digite a quantidade de moedas de 5 centavos:"));

  
  const total =
    moedas1 * 1.0 +
    moedas050 * 0.5 +
    moedas025 * 0.25 +
    moedas010 * 0.10 +
    moedas005 * 0.05;

  console.log(`Total no cofrinho: R$ ${total.toFixed(2)}`);


  if (total >= valorProduto) {
    console.log("Você tem dinheiro suficiente para comprar o produto!");
  } else {
    const faltando = valorProduto - total;
    console.log(`Faltam R$ ${faltando.toFixed(2)} para comprar o produto.`);
  }
}
