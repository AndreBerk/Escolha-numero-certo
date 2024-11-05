//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do Numero secreto";

//let descricao = document.querySelector("p");
//descricao.innerHTML = "Tente adivinhar o número secreto entre 1 e 100!";

let numeroSecreto = 6;
let tentativas = 1;

function exbitirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto 
}

function exibirMensagemInicial() {
    exbitirTextoNaTela("h1", "Jogo do Numero secreto" );
    exbitirTextoNaTela("p", "Tente adivinhar o número secreto entre 1 e 100!" );
} 
    exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector("input").value
    if (chute == numeroSecreto) {
        let palavraTentaiva = tentativas > 1? "tentativas" : "tentativa";
        exbitirTextoNaTela("h1", "Parabens você acertou o Numero Secreto");
        exbitirTextoNaTela("p", `Você descobriu com ${tentativas} ${palavraTentaiva}`);
    } else {
        if (chute > numeroSecreto) {
            exbitirTextoNaTela("h1", "Você errou");
            exbitirTextoNaTela("p", `Uma dica o numero é menor ${chute}`);    
        } else {
            exbitirTextoNaTela("h1", "Você errou");
            exbitirTextoNaTela("p", `Uma dica o numero é maior ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}
    function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
} 
    function limparCampo() {
        chute = document.querySelector("input");
        chute.value = "";
        
    }

    function novojogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;  
        exibirMensagemInicial();   
  }