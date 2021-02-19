class Cell {

    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.value = null;
        this.clicked = false;
    }

    show() {
        push();
        stroke(250);
        if (!this.clicked) {
            fill(50);
            strokeWeight(5)
        } else {
            fill(45);
            strokeWeight(8)
        }
        rect(this.i * width / 3, this.j * height / 3, width / 3, height / 3);
        if(this.clicked) strokeWeight(4)
        if (this.value == 'x') {
            line(this.i * width / 3 + width / 12, this.j * width / 3 + width / 12, (this.i + 1) * width / 3 - width / 12, (this.j + 1) * width / 3 - width / 12);
            line((this.i + 1) * width / 3 - width / 12, this.j * width / 3 + width / 12, this.i * width / 3 + width / 12, (this.j + 1) * width / 3 - width / 12);
        }
        if (this.value == 'o') {
            ellipse(this.i * width / 3 + width / 6, this.j * width / 3 + width / 6, width / 6)
        }
        pop();
    }

    highlight() {
        if (!this.clicked) {
            push();
            fill(55);
            stroke(250);
            strokeWeight(2)
            rect(this.i * width / 3, this.j * height / 3, width / 3, height / 3);
            strokeWeight(6)
            if (this.value == 'x') {
                line(this.i * width / 3 + width / 12, this.j * width / 3 + width / 12, (this.i + 1) * width / 3 - width / 12, (this.j + 1) * width / 3 - width / 12);
                line((this.i + 1) * width / 3 - width / 12, this.j * width / 3 + width / 12, this.i * width / 3 + width / 12, (this.j + 1) * width / 3 - width / 12);
            }
            if (this.value == 'o') {
                ellipse(this.i * width / 3 + width / 6, this.j * width / 3 + width / 6, width / 6)
            }
            pop();
        }
    }

    click() {
        this.clicked = true;
        return new Promise((res, rej) => {
            setTimeout(() => {
                this.clicked = false;
                res();
            }, 100);
        })
    }
}