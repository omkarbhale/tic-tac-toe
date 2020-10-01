var isOcupied = [];
var move = "O";
var gameState = [];

function setup() {
    width = 600;
    height = 600;

    // for (i = 0; i < 9; i++) {
    //     isOcupied[i] = false;
    // }

    createCanvas(width, height);
    background(50);
    gameState = [
        ["X", "O", "O"],
        ["X", null, "O"],
        [null, null, null]
    ]
    isOcupied = [
        [true, true, true],
        [true, false, true],
        [false, false, false]
    ]
    // for (k = 0; k < 3; k++) {
    //     let temp = [];
    //     let temp1 = [];
    //     for (y = 0; y < 3; y++) {
    //         temp[y] = null;
    //         temp1[y] = false;
    //     }
    //     gameState.push(temp);
    //     isOcupied.push(temp1);
    // }
}

function draw() {
    stroke(255);
    strokeWeight(2);
    line(width / 3, 0, width / 3, height);
    line(2 * width / 3, 0, 2 * width / 3, height);
    line(0, height / 3, width, height / 3);
    line(0, 2 * height / 3, width, 2 * height / 3);
    if (mouseIsPressed) {
        var col = checkCol();
        var row = checkRow();
        console.log("playing at", col, row)

        if (col != false && row != false) {
            playAt(col, row);
            // if (checkWin(gameState) == "X") {
            //     console.log("X wins");
            //     alert("X wins!, refresh to restart:)");
            //     noLoop();
            // }
            // if (checkWin(gameState) == "O") {
            //     console.log("O wins");
            //     alert("O     wins!, refresh to restart:)")
            //     noLoop();
            // }
        }

    }
}

function checkCol() {
    if (mouseX > 0 && mouseX < width / 3) {
        return 1;
    }
    if (mouseX > width / 3 && mouseX < 2 * width / 3) {
        return 2;
    }
    if (mouseX > 2 * width / 3 && mouseX < width) {
        return 3;
    }
    else {
        return false;
    }
}

function checkRow() {
    if (mouseY > 0 && mouseY < height / 3) {
        return 1;
    }
    if (mouseY > height / 3 && mouseY < 2 * height / 3) {
        return 2;
    }
    if (mouseY > 2 * height / 3 && mouseX < width) {
        return 3;
    } else {
        return false;
    }
}

function playAt(col, row) {
    if (isOcupied[col - 1][row - 1] == true) {
        return;
    }
    else if (move == "O") {
        isOcupied[col - 1][row - 1] = true;
        new o(col, row, width);
        gameState[col - 1][row - 1] = "O";
        move = "X";

        if (checkWin(gameState) == "O") {
            console.log("O wins");
            alert("O wins!, refresh to restart:)")
            noLoop();
            return;
        }
    }

    if (move == "X") {
        let bestScore = -Infinity;
        let tempMove = {};
        for (let i = 0; i < 3; i++) { //col-1/x
            for (let j = 0; j < 3; j++) { //row-1/y
                let score;
                if (isOcupied[i][j] == false) {
                    isOcupied[i][j] == true;
                    gameState[i][j] == "X";
                    score = minimax(false, gameState, isOcupied, 10);
                    gameState[i][j] == null;
                    isOcupied[i][j] == false;
                }
                if (score > bestScore) {
                    bestScore = score;
                    tempMove = { x: i, y: j };
                }
            }
        }


        isOcupied[tempMove.x][tempMove.y] = true;
        new x(tempMove.x + 1, tempMove.y + 1, width);
        gameState[tempMove.x][tempMove.y] = "X";
        move = "O";


        if (checkWin(gameState) == "X") {
            console.log("X wins");
            alert("X wins!, refresh to restart:)");
            noLoop();
            return;
        }
        return;
    }

}

function checkWin(game) {
    // checking all columns
    for (i = 0; i < 3; i++) {
        if (game[i][0]) {
            if (game[i][0] == game[i][1] && game[i][0] == game[i][2]) {
                if (game[i][0] == "X") {
                    return "X";
                } else {
                    return "O";
                }
            }
        }
    }
    for (j = 0; j < 3; j++) {
        if (game[0][j]) {
            if (game[0][j] == game[1][j] && game[0][j] == game[2][j]) {
                if (game[0][j] == "X") {
                    return "X";
                } else {
                    return "O";
                }
            }
        }
    }
    if (game[0][0]) {
        if (game[0][0] == game[1][1] && game[0][0] == game[2][2]) {
            if (game[0][0] == "X") {
                return "X";
            } else {
                return "O";
            }
        }
    }
    if (game[2][0]) {
        if (game[2][0] == game[1][1] && game[2][0] == game[0][2]) {
            if (game[2][0] == "X") {
                return "X";
            } else {
                return "O";
            }
        }
    }
    return null;
}