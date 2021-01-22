class Roof{
    constructor(x,y,width,height){
        this.x=x; this.y=y; this.width=width; this.height= height
        this.body=Bodies.rectangle(this.x, this.y, this.width,this.height)
         World.add(world, this.body); 
    }
    display(){
        var roofpos = this.body.position;
            push();
            translate(roofpos.x, roofpos.y,roofpos.width,roofpos.height);
            rectMode(CENTER);
            strokeWeight(3);
            fill(255,0,255);
            pop();
}
}