class Bird  {

    constructor (x,y){

        var bird_options = {

restitution : 0.3 ,
     density : 1 ,
     friction : 0.3 ,

        }

        this.body=Bodies.rectangle(x,y,50,50,bird_options) ;
        World.add(world,this.body) ;
        this.width=50 ; this.height=50 ;
    }

display() {

 push() 
 translate (mouseX , mouseY) ;
 rotate(this.body.angle); 
 rectMode(CENTER) ;
 fill ("red") ;
rect(0,0,this.width,this.height) ;
pop () ;

}

}