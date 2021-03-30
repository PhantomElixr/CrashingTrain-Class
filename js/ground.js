class Ground{
    constructor(){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(400, 380, 2000, 20, options);
        World.add(world, this.body);
    }
}