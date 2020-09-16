class Tree {
    constructor(x, y) {
        this.img = loadImage("tree.png");
        this.x = x;
        this.y = y;
    }

    show() {
        image(this.img, this.x, this.y,170,280);
    }
}