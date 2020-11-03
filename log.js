class Log{
    constructor(x,y,height,angle){
        var options={
            'restitution':0.8,
            'friction': 0.4,
            'density':0.5
         }
    this.log=Bodies.rectangle(x,y,20,height,options);
    this.width=20;
    this.height=height;
    Matter.Body.setAngle(this.log , angle);
    World.add(world,this.log);
   }


    display(){
        var pos = this.log.position
        var angle= this.log.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
            stroke('blue');
            strokeWeight(5);
            fill('yellow');
            rect(0, 0, this.width, this.height);
            pop();
    }

}
