class box{
    constructor(){
        this.value = null;
    }
}

class o{
    constructor(x, y, width){
        this.x = x;
        this.y = y;
        stroke(255, 0, 0);
        strokeWeight(5);
        noFill();
        ellipse((x-1)*width/3+width/6, (y-1)*width/3+width/6, width/5);
    
    }
}
class x{
    constructor(x, y, width){
        this.x = x;
        this.y = y;
        stroke(255, 0, 0);
        strokeWeight(5);
        line((x-1)*width/3+width/12, (y-1)*width/3+width/12, x*width/3-width/12, y*width/3-width/12);
        line(x*width/3-width/12, (y-1)*width/3+width/12, (x-1)*width/3+width/12, y*width/3-width/12);
    
    }
}