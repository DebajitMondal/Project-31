class Plinko {
    constructor(x, y, radius) {
        var options = {
            'isStatic': true,
            'friction':0.3,
            'density':0.3,
            'restitution': 0.3
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        this.color = color("white");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}