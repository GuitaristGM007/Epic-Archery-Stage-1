//create a class for ComputerBase
class ComputerBase{
//create the constructor
constructor(x, y, w, h){
//define behaviour of the object
var options = {
isStatic : true
};
//define properties
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.body = Bodies.rectangle(x, y, w, h, options);
this.image = loadImage("./assets/base2.png");
//add the object(s) in the World
World.add(world, this.body);
}
//create display function 
display(){
//declare the sample variable
var place = this.body.position;
//declare the angle
var angle = this.body.angle;
//define other properties
push();
translate(place.x, place.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0, this.w, this.h);
pop();
}
}
