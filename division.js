class Division {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.color = color("white");
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);
    }
}