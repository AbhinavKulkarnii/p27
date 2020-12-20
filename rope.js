class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {
                x: this.offsetX,
                y: this.offsetY
            }
          
        }
    
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }


    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(2);
        var anchor1x = pointA.x
        var anchor1y = pointA.y
        var anchor2x = pointB.x + this.offsetX
        var anchor2y = pointB.y + this.offsetY
        line(anchor1x,anchor1y,anchor2x,anchor2y);

    
}}