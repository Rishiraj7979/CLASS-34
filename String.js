class String{
    constructor(bodyA,pointB){
        var options ={
            
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 0.05,
            length:350

        }
        this.pointB=pointB;
        this.string= Constraint.create(options)
        World.add(world,this.string);
        

    }
    display(){
        var pointA=this.string.bodyA.position;
        var pointB=this.pointB;
       
        push();
        strokeWeight(6);
        stroke(48,22,8);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}
