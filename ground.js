class ground{
    constructor(x, y, width, height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x, y,width,height,options)
        this.w=width
        this.h=height
        World.add(world,this.body)
    }
    display(){
        var groundPos=this.body.position;		
        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        fill("brown")
        rect(0,0,this.w, this.h);
        pop();
    }
}