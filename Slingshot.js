class Slingshot {
    constructor(bodyA,pointB){
        var options ={
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.7,
            'length': 0.5
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
       
        if (this.slingshot.bodyA){
            var pointA=this.slingshot.bodyA.position;
            var pointB=this.pointB; 
            push();
            strokeWeight(5);
            stroke("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
        
    }
    
    fly(){
        this.slingshot.bodyA = null;
    }
}