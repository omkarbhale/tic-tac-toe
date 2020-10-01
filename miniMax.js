function minimax(isMaximising, gamest, isOcc, depth) {

    if (checkWin(gamest) != null || depth == 0) {
        let score = calcScore(gamest);
        return score;
    }

    if (isMaximising) {
        //maximising code here

        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) { //col/x
            for (let j = 0; j < 3; j++) { //row/x
                if (isOcc[i][j] == false) {
                    isOcc[i][j] = true;
                    gamest[i][j] = "X";
                    let score = minimax(false, gamest, isOcc, depth - 1);
                    isOcc[i][j] = false;
                    gamest[i][j] = null;

                    if (score > bestScore) {
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;
    }

    else {
        let leastScore = Infinity;
        for (let i = 0; i < 3; i++) { //col/x
            for (let j = 0; j < 3; j++) { //row/x
                if (isOcc[i][j] == false) {
                    isOcc[i][j] = true;
                    gamest[i][j] = "O";
                    let score = minimax(true, gamest, isOcc, depth - 1);
                    isOcc[i][j] = false;
                    gamest[i][j] = null;

                    if (score < leastScore) {
                        leastScore = score;
                    }
                }
            }
        }
        return leastScore;
    }
    // return random(-10,10);
}

function calcScore(game) {
    if (checkWin(game) == "X") {
        return 1;
    }
    if (checkWin(game) == "O") {
        return -1;
    } else {
        return 0;
    }
}