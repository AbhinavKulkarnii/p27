class Bob{
    constructor(x,y,r){
        var option = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8
        }

        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y,this.r/2,option)
        World.add(world,this.body);
    }

    display(){
        push();
         translate(this.body.position.x,this.body.position.y)
         fill(255,0,255);
         ellipse(0,0,this.r,this.r);


        pop();
    }





}