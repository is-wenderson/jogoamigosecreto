let listaNumeroSorteado = [];
let MAX = 100;
let numeroSecreto = gerarNumAleatorio();
let tentativa = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function gerarNumAleatorio(){
    let numeroAleatorio = parseInt(Math.random() * MAX + 1);
    
    let tamanhodalista = listaNumeroSorteado.length;
    
    if(tamanhodalista == MAX){
        listaNumeroSorteado = [];
    }
    
    if(listaNumeroSorteado.includes(numeroAleatorio)){
        return gerarNumAleatorio();
    } else {
        listaNumeroSorteado.push(numeroAleatorio);
        return numeroAleatorio;
    }

}

function imprimirTextos(){
    exibirTexto('h1', 'Bem-vindo ao desafio!');
    exibirTexto('p', 'Digite um número entre 1 e 100: ');
}

imprimirTextos();

function verificarChute(){
    let numeroUsuario = parseInt(document.querySelector('input').value);
    if(numeroUsuario < 11 && numeroUsuario > 0){
        if(numeroSecreto == numeroUsuario){
            let numTentativas = tentativa > 1 ? "tentativas" : "tentativa";
            exibirTexto('h1', 'Parabéns! Você acertou ');
            exibirTexto('p', 'Você descobriu o número secreto! (' + numeroSecreto +') em '+tentativa+' '+numTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if(numeroSecreto > numeroUsuario){
                exibirTexto('h1', 'Você errou! O número secreto é MAIOR que '+numeroUsuario+'!');
            } else {
                exibirTexto('h1', 'Você errou! O número secreto é MENOR que '+numeroUsuario+'!');
            }
            tentativa++;
            limparTentativa();
        }

    }else{
        exibirTexto('h1', 'Digite um número entre 1 e 10!')
    }
    
   
}

function limparTentativa(){
    let numeroUsuario = document.querySelector('input');
    numeroUsuario.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAleatorio();
    limparTentativa();
    tentativa = 1;
    imprimirTextos();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
