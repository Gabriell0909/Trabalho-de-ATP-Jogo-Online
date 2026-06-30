//CAPTURA O NOME DE JOGADOR
let jogador1 = document.getElementById("p1name");
let jogador2 = document.getElementById("p2name");

//BUSCA O CAMPO DO NUMERO DE VITORIAS
let pontuacaoP1 = document.querySelector("#nVitoriaP1");
let pontuacaoP2 = document.querySelector("#nVitoriaP2");

//BUSCA O CAMPO QUE REPRESENTA O NUMERO DE ROUNDS
let rodadas = document.querySelector("#nRounds");

//COLETA TODAS AS CELULAS
const celulas = document.querySelectorAll(".celula");

//A FUNÇÃO DEVE DETERMINAR QUEM E O JOGADOR A FAZER A JOGADA E QUAL OPÇÃOD E JOGADA O PERTENCE
function jogadorAtual(P1, P2) {
  let sorteio = Math.floor(Math.random() * 2);

  if (sorteio === 1) {
    P1 = "X";
    P2 = "O";
  } else {
    P1 = "O";
    P2 = "X";
  }

}

function tabuleiro() {
  celulas.forEach((celula) => {
    celula.addEventListener("click", function () {
      celula.innerText = "X"
    });
  });
}
