function Escena4(){
    var suriMover4;
var subir_arbol;
var tocar_elefante;
var caminar;
    var vertical;


    this.enter = function(){
        suriMover4 = createSprite(0, 500);
        var myAnimation = suriMover4.addAnimation('parada', 'assets/08.png');
        suriMover4.addAnimation('costado', 'assets/00.png', 'assets/07.png');
        suriMover4.addAnimation('trepar', 'assets/33.png',  'assets/36.png');
        suriMover4.setCollider('rectangle', 0, 0, 150, 150);

        subir_arbol= false;
        tocar_elefante= false;
        caminar=true;
        vertical=false;
    }


    this.draw = function(){
        image(fondoEscena4, 0,0);
        drawIntroScreen();
        //suriMover4.debug = mouseIsPressed;  
        drawSprites();

        //sube de nivel
        if(suriMover4.position.y <= 100 ){
            this.sceneManager.showScene( Arbol2, key );
            suriMover4.remove();
            //ramitas.remove();
            }


noFill();
  //corteza arriba
  //rect(40 , 0, 300 ,100);
  //corteza base
  //rect(40 , 0, 300 ,600);
  //patas elefante
  //rect(600 , 300, 300 ,200);
    }


    this.mousePressed = function(){
        if((suriMover4.position.x >= 100 && suriMover4.position.x <= 100+200 ) && 
        (mouseX > 100 && mouseX <= 100+200)){
            subir_arbol=true;
            vertical=true;
            caminar=false;
        }

        if((suriMover4.position.x >= 600 && suriMover4.position.x <= 900 ) && 
        (mouseX > 600 && mouseX <= 900)){
            tocar_elefante=true;
            suriMover4.remove();
            sonido_elefante2.play();
        }

        if (tocar_elefante && mouseX > 900 && mouseX < 900 + 150 && mouseY > 300 && mouseY < 300 + 150) {
            this.sceneManager.showScene( Escena1, key );
            sonido_elefante2.stop();
            //setup();
            
        }
    }



    function drawIntroScreen(){
        //movimiento caminar
        if(caminar){
            vertical=false;
               if(mouseX < suriMover4.position.x - 10) {
                   suriMover4.changeAnimation('costado');
                   //flip horizontally
                   suriMover4.mirrorX(-1);
                   //negative x velocity: move left
                   suriMover4.velocity.x = -2;
               }
               else if(mouseX > suriMover4.position.x + 10) {
                   suriMover4.changeAnimation('costado');
               //unflip
                   suriMover4.mirrorX(1);
               suriMover4.velocity.x = 2;
               } else {
                   //if close to the mouse, don't move
                   suriMover4.changeAnimation('parada');
                   suriMover4.velocity.x = 0;
                   } 
           }
   
           if(vertical){
               caminar=false;      
               suriMover4.changeAnimation('trepar');
           }

         //hacia escena arbol2
         if(subir_arbol){
            suriMover4.position.x=180;
            suriMover4.velocity.x = 0;
            suriMover4.velocity.y = -2;
           }


           if(tocar_elefante){
               image(finalElefante2, 0,0);
               image(boton, 950, 300);
               
               //no poner sonido aca
           }


    }//fin de funcion drawIntroScreen

    /*
    this.keyPressed = function () {
        if (keyCode === RIGHT_ARROW) {
            this.sceneManager.showScene(Arbol2, key);
            suriMover4.remove();
        }
    }

*/



}//final de clase