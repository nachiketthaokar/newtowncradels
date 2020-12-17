class rope {
    constructor(bodyA,bodyB,x,y){
        this.x=x;
        this.y=y;
        var option = {
            bodyA: bodyA,
            pointB: {x:this.x,y:this.y},
            bodyB: bodyB,
            length: 10,

            stiffness: 0.04
            
      
        } 
        this.sling=Constraint.create(option)
        World.add(world,this.sling);    
        
    }
display(){
   
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;
        strokeWeight(3);
        var pointC=pointB.x+this.x
        var pointD=pointB.y+this.y
        line(pointA.x,pointA.y,pointC,pointD);
    
}


}