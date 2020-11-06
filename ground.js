class Ground{
    constructor(){
        this.body=Bodies.rectangle(400,390,800,15,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        strokeWeight(3);
        stroke("red");
        fill("green");
        rect(this.body.position.x,this.body.position.y,800,15)
    }
}