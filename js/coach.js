class Coach{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':2
        }
        this.body = Bodies.rectangle(x, y, 100, 40, options);
        this.width = 100;
        this.height = 40;
        this.image = loadImage('images/coach.png');
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