class Rock{
    constructor(){
        var options = {
            'restitution':0.2,
            'friction':1,
            'density':1
        }
        this.body = Bodies.rectangle(700, 379, 200, 100, options);
        this.width = 200;
        this.height = 100;
        this.image = loadImage('images/rock1.png');
        World.add(world, this.body);
    }

    display(){
       
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}