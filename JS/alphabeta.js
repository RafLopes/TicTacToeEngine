function melhorlancealphabeta(){
console.log("alphabeta")
    var alpha = -Infinity
    var beta = Infinity

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
                    var Score = minimaxalphabeta(0, false, alpha, beta)
                }else{
                    var Score = minimaxalphabeta(0, true, alpha, beta)
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



function minimaxalphabeta(depth, isMaximizing, alpha, beta){
    
    let terminou = checkfim()

    if( tabuleiro.fimdojogo != 0){
        contrava+=1
        let score = tabuleiro.vencedor
        return score
    }


    if(isMaximizing){ 
        // console.log("maximizando")
        var bestScore = -999

        for (var i=0; i<9; i++ ){
            if(tabuleiro.posicao[i] == "0"){

                lance(i)

                let score = minimaxalphabeta(depth + 1, false, alpha, beta);

                desfazlance(i)

                bestScore = Math.max(score, bestScore)

                alpha = Math.max(alpha, bestScore)

                if(beta <= alpha){
                    break
                }
            }

        }

        return bestScore-depth*5
    }

    if(!isMaximizing){ 
        // console.log("minimizando")
        var bestScore = 999

        for (var i=0; i<9; i++ ){
            if(tabuleiro.posicao[i] == "0"){

                lance(i)

                let score = minimaxalphabeta(depth + 1, true, alpha, beta);

                desfazlance(i)

                bestScore = Math.min(score, bestScore)

                beta = Math.min(beta, bestScore)

                if(beta <= alpha){
                    break
                }

            }

        }

        return bestScore+depth*5
    }

}