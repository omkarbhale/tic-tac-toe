class Game {
    constructor(move, isAI) {
        this.grid = []
        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 3; i++) {
                this.grid.push(new Cell(i, j))
            }
        }
        this.move = move;
        this.isFinished = false;
    }

    play(index) {
        if(this.isFinished) return;

        if (!(this.grid[index].value == null)) return;
        this.grid[index].value = this.move;

        if (this.move == 'x') {
            this.move = 'o';
        } else {
            this.move = 'x';
        }
        console.log((this.isWon(this.grid)) + " Won")
    }

    isWon(grid) {
        // horizontal
        for (let i = 0; i < 3; i++) {
            if (grid[i * 3].value == grid[i * 3 + 1].value && grid[i * 3].value == grid[i * 3 + 2].value && grid[i*3].value != null) {
                this.isFinished = true;
                return grid[i * 3].value;
            }
        }
        // vertical
        for (let i = 0; i < 3; i++) {
            if (grid[i].value == grid[i + 3].value && grid[i].value == grid[i + 6].value && grid[i].value != null) {
                this.isFinished = true;
                return grid[i * 3].value;
            }
        }
        // diagonal
        if(grid[0].value == grid[4].value && grid[0].value == grid[8].value && grid[0].value != null) {
            this.isFinished = true;
            return grid[0].value;
        }
        if(grid[2].value == grid[4].value && grid[2].value == grid[6].value && grid[2].value != null) {
            this.isFinished = true;
            return grid[2].value;
        }
        return false;
    }
}