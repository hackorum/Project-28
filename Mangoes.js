class Mango {
    constructor(x, y) {
        var options = {
            friction: 1,
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 15, options);
        World.add(world, this.body);
        this.image = loadImage("mango.png");

    }

    show() {

        push();
        translate(this.body.position.x, this.body.position.y);
        image(this.image, -15, -15, 30, 30);
        pop();

    }
}