class Particle {
    constructor(x, y, radius) {
        var options = {
            'friction':0.3,
            'density':0.3,
            'restitution': 0.3

        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}