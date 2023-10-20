

const BtnLance = document.getElementById('BtnLance');
BtnLance.addEventListener('click', fazlance);

const BotaoLanceAI = document.getElementById('BtnLanceAI');
BotaoLanceAI.addEventListener('click', fazlanceAI)

const BotaoMelhorLance = document.getElementById('BtnMelhorLance');
BotaoMelhorLance.addEventListener('click', fazermelhorlance)

const BotaoMelhorLanceAlphaBeta = document.getElementById('BtnMelhorLanceAlphaBeta');
BotaoMelhorLanceAlphaBeta.addEventListener('click', fazermelhorlanceAlphaBeta)

const BotaoReiniciar = document.getElementById('BtnReiniciarJogo');
BotaoReiniciar.addEventListener('click', reiniciarjogo)

function fazlance(){
    var Linha = parseInt(document.getElementById("linha").value)
    var Coluna = parseInt(document.getElementById("coluna").value)
    lanceconvertido(Linha, Coluna)
    atualizatabuleiro()
}

function fazlanceAI(){
    lanceAI()
    atualizatabuleiro()
}

function atualizatabuleiro(){
    checkfim()
    for (i=0 ; i < 9 ; i++){

        if(tabuleiro.posicao[i] == "0"){
            document.getElementById(i.toString()).innerHTML = "-";
        }
        if(tabuleiro.posicao[i] == "1"){
            document.getElementById(i.toString()).innerHTML = "O";
        }
        if(tabuleiro.posicao[i] == "2"){
            document.getElementById(i.toString()).innerHTML = "X";
        }
    }

    if(tabuleiro.fimdojogo == 1){
        if(tabuleiro.velha == 1){
            document.getElementById("Resultado").innerHTML = "Deu velha!"
        }else{
            if(tabuleiro.turno == 1){
                document.getElementById("Resultado").innerHTML = "O jogador 2 (X) venceu "
            }else{
                document.getElementById("Resultado").innerHTML = "O jogador 1 (O) venceu "
            }
            
        }
        
    }
    
}

function fazermelhorlance(){
    melhorlance()
}

function reiniciarjogo(){
tabuleiro.posicao = "000000000"
tabuleiro.turno = 1   // de quem é a vez 1 ou 2
tabuleiro.fimdojogo = 0 //1 se o jogo acabar
tabuleiro.velha = 0 // 1 se der velha
tabuleiro.vencedor = 0 //1 se bolinha e -1 se X
document.getElementById("Resultado").innerHTML = " "
atualizatabuleiro()
}

function fazermelhorlanceAlphaBeta() {
    melhorlancealphabeta()
}