class Stone {
    constructor(x,y){
        var options = {
            restitution:1.4,
            friction:9.0,
            //density:1.0,
           // isStatic:true
        }

        this.r = 60;
        this.body = Bodies.circle(x,y,60,options);

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        push()
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r);
        fill("green");
        noStroke();
       
        pop();
    }

    
}