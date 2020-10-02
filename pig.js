class Pig  {

    constructor (x,y){

        var pig_options = {

restitution : 0.3 ,
     density : 1 ,
     friction : 0.3 ,

        }

        this.body=Bodies.rectangle(x,y,50,50,pig_options) ;
        World.add(world,this.body) ;
        this.width=50 ; this.height=50 ;
    }

display() {

var pos=this.body.position ;
 push() 
 translate (pos.x , pos.y) ;
 rotate(this.body.angle);
 rectMode(CENTER) ;
 fill ("green") ;
rect(0,0,this.width,this.height) ;
pop () ;

}

}