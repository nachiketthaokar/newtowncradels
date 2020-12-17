class bob {
    constructor(x,y){
      var  option={
          isStatic:true,
          restitution:0.3
      }
      this.x=x;this.y=y
      this.body=Bodies.circle(this.x,this.y,15,option);
      World.add(world,this.body);
    }
   


display(){
    var angle = this.body.angle;
    var position = this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
   ellipseMode(RADIUS);
    ellipse(0,0,30,30);
    pop();


}
}