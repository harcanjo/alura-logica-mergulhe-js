// Desafios 02

// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
/*
let diaDaSemana = prompt("Qual é o dia da semana?");
if (diaDaSemana == "Domingo" || diaDaSemana == "Sábado") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}
*/

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
/*
let numeroUsuario = prompt("Digite um número");
if (numeroUsuario > 0) {
  alert("Número positivo");
} else if (numeroUsuario == 0) {
  alert("Número zero");
} else {
  alert("Número negativo");
}
*/

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontos = prompt("Qual a pontuação do jogo?");
if (pontos >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// 5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.