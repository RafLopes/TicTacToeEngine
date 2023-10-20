function melhorlance(){

    if(tabuleiro.turno === 1){
        var bestScore = -999
    }else{
        var bestScore = 999
    }

    
    let move
    contrava = 0

    for (var i=0; i<9; i++ ){
        
        if(tabuleiro.posicao[i] == "0"){
                lance(i)

                if(tabuleiro.turno === 2){
                    var Score = minimax(0, false)
                }else{
                    var Score = minimax(0, true)
                }
                
                desfazlance(i)
                
                if(tabuleiro.turno === 1){
                    if (Score > bestScore) {
                        bestScore = Score
                        move = i
                    }
                }else{
                    if (Score < bestScore) {
                        bestScore = Score
                        move = i
                    }
                }
                
        }
    }        

    console.log("Melhor score: "+bestScore)
    console.log("Foram analisadas: " + contrava + " posições")
    console.log("O melhor lance é o da casa: " + move)
    lance(move)
    atualizatabuleiro()

}



function minimax(depth, isMaximizing){
    
    
    let terminou = checkfim()

    if( tabuleiro.fimdojogo != 0){
        contrava+=1
        let score = tabuleiro.vencedor
        return score
    }


    if(isMaximizing){ 

        var bestScore = -999

        for (var i=0; i<9; i++ ){
            if(tabuleiro.posicao[i] == "0"){

                lance(i)

                let score = minimax(depth + 1, false);

                desfazlance(i)

                bestScore = Math.max(score, bestScore)

            }
            
        }

        return bestScore-depth*5
    }

    if(!isMaximizing){ 

        var bestScore = 999

        for (var i=0; i<9; i++ ){
            if(tabuleiro.posicao[i] == "0"){

                lance(i)

                let score = minimax(depth + 1, true);

                desfazlance(i)

                bestScore = Math.min(score, bestScore)


            }
            
        }

        return bestScore+depth*5
    }

}