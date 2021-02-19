let game;

function setup() {
    // width = 600;
    // height = 600;

    createCanvas(600, 600);

    game = new Game('x');
}

function draw() {
    background(250)

    for (let i = 0; i < game.grid.length; i++) {
        game.grid[i].show();
    }
    if (mouseInGrid()) {
        const index = getIndex();
        game.grid[index].highlight();
    }
}

function getIndex() {
    const x = parseInt(mouseX / width * 3);
    const y = parseInt(mouseY / width * 3);
    const index = y * 3 + x;
    return index;
}

function mouseInGrid() {
    return (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height);
}

function mousePressed() {
    if(!mouseInGrid()) return
    index = getIndex();
    game.grid[index].click();
    game.play(index);
}