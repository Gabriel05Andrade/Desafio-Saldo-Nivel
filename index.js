let quantidadeDeVitorias = 150;
let quantidadeDeDerrotas = 81;
let resultado = subtracao(quantidadeDeVitorias, quantidadeDeDerrotas);
let nivelDoHeroi;
function subtracao(numA, numB) {
  let somatorio = numA - numB;
  return somatorio;
}

if (resultado <= 10) {
  nivelDoHeroi = "Ferro";
} else if (resultado >= 11 && resultado <= 20) {
  nivelDoHeroi = "Bronze";
} else if (resultado >= 21 && resultado <= 50) {
  nivelDoHeroi = "Prata";
} else if (resultado >= 51 && resultado <= 80) {
  nivelDoHeroi = "Ouro";
} else if (resultado >= 81 && resultado <= 90) {
  nivelDoHeroi = "Diamante";
} else if (resultado >= 91 && resultado <= 100) {
  nivelDoHeroi = "Lendário";
} else if (resultado >= 101) {
  nivelDoHeroi = "Imortal";
}

console.log(
  "O herói tem saldo de " + resultado + " e está no nível " + nivelDoHeroi
);
