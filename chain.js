class Chain{
    constructor(body1,body2){
        var options={
            bodyA: body1,
            bodyB: body2,
            stiffness:0.02,
            length:10
        } 
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    
    display(){
        var postA = this.chain.bodyA.position;
        var postB = this.chain.bodyB.position;
        strokeWeight(4);
        line (postA.x,postA.y,postB.x,postB.y);

    }
}