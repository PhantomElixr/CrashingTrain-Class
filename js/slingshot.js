class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 100
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    display(){
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;
        }
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}