function desenhatabuleiro() {

    var linha1 = tabuleiro.posicao.slice(0,3)
    var linha2 = tabuleiro.posicao.slice(3,6)
    var linha3 = tabuleiro.posicao.slice(6,9)

    return console.log(linha1 + "\n" + linha2 + "\n" + linha3)
}

function lance(casa) {

    var fimdojogo = checkfim()

    if (fimdojogo == 0){
        if(tabuleiro.posicao[casa] == "0" ){

            if (tabuleiro.turno === 1){
                tabuleiro.posicao = tabuleiro.posicao.substring(0, casa) + "1" + tabuleiro.posicao.substring(casa + 1);
                tabuleiro.turno = 2
            } else {
                tabuleiro.posicao = tabuleiro.posicao.substring(0, casa) + "2" + tabuleiro.posicao.substring(casa + 1);
                tabuleiro.turno = 1
            }


            
            return //desenhatabuleiro()
    
        } else {
            return console.log("Esta casa já foi usada")
        }
    }else{
        console.log("O jogo já terminou")
    }

}

function desfazlance(casa) {

    if (tabuleiro.turno === 1){
        tabuleiro.posicao = tabuleiro.posicao.substring(0, casa) + "0" + tabuleiro.posicao.substring(casa + 1);
        tabuleiro.turno = 2
    } else {
        tabuleiro.posicao = tabuleiro.posicao.substring(0, casa) + "0" + tabuleiro.posicao.substring(casa + 1);
        tabuleiro.turno = 1
    }

    tabuleiro.velha = 0
    tabuleiro.vencedor = 0
    tabuleiro.fimdojogo = 0
    // desenhatabuleiro()
}

function converte(linha, coluna) {
    /*

                coluna 1 coluna 2 coluna 3
    linha 3        0       0       0
    linha 2        0       0       0       
    linha 1        0       0       0 

    */

    var casa = 10

   switch(linha) {
    case 1:
        switch(coluna) {
            case 1:
                casa = 6
                break;
            case 2:
                casa = 7
                break;
            case 3:
                casa = 8
                break;
            default:
              console.log("Escreva uma linha e coluna válida entre 1 e 3")
          }
      break;
    case 2:
        switch(coluna) {
            case 1:
                casa = 3
                break;
            case 2:
                casa = 4
                break;
            case 3:
                casa = 5
                break;
            default:
              console.log("Escreva uma linha e coluna válida entre 1 e 3")
          }
      break;
    case 3:
        switch(coluna) {
            case 1:
                casa = 0
                break;
            case 2:
                casa = 1
                break;
            case 3:
                casa = 2
                break;
            default:
              console.log("Escreva uma linha e coluna válida entre 1 e 3")
          }
      break;
    default:
      console.log("Escreva uma linha e coluna válida entre 1 e 3")
  }

    return casa

}

function lanceconvertido(linha, coluna){
    var casa = converte(linha, coluna)
    lance(casa)
}

function checkfim() {

    function checktresvalores(a, b,c){
        var ehigual = false
        if(tabuleiro.posicao[a] === tabuleiro.posicao[b] && tabuleiro.posicao[b] === tabuleiro.posicao[c] && tabuleiro.posicao[c] !== "0"){
            ehigual = true
        }
        return ehigual
    }

    if(checktresvalores(0,1,2)){
        tabuleiro.fimdojogo = 1
    }
    if(checktresvalores(3,4,5)){
        tabuleiro.fimdojogo = 1
    }    
    if(checktresvalores(6,7,8)){
        tabuleiro.fimdojogo = 1
    }

    if(checktresvalores(0,3,6)){
        tabuleiro.fimdojogo = 1
    }
    if(checktresvalores(1,4,7)){
        tabuleiro.fimdojogo = 1
    }    
    if(checktresvalores(2,5,8)){
        tabuleiro.fimdojogo = 1
    }

    if(checktresvalores(2,4,6)){
        tabuleiro.fimdojogo = 1
    }    
    if(checktresvalores(0,4,8)){
        tabuleiro.fimdojogo = 1
    }


    if(tabuleiro.fimdojogo == 1){
        if(tabuleiro.turno == 1){
            tabuleiro.vencedor = -100
        }else{
            tabuleiro.vencedor = 100
        }
    }

    if(!tabuleiro.posicao.includes("0")){
        if(tabuleiro.vencedor == 0){
            tabuleiro.fimdojogo = 1
            tabuleiro.velha = 1
            tabuleiro.vencedor = 0
        }
        
    }
return tabuleiro.fimdojogo

}

function lanceAI() {
    var casa = Math.floor(Math.random() * 9);
    cont = 0

    while (tabuleiro.posicao[casa] != "0"){
        casa = Math.floor(Math.random() * 9);
        cont+=1
        if(cont == 100){
            break
        }
    }

    if(tabuleiro.fimdojogo == 1){
        console.log("O jogo já terminou")
    }else{
        lance(casa)
    }

}
