function Arbol3(){
    var suriMover6;
    var subir_arbol;
    var contador_monos;
    var activar_contador_monos;
    var boton_arbol;
    


    this.enter = function(){
        //monosRiendo.play();

        colisionMonos = createSprite(570,362);
        var myAnimation = colisionMonos.addAnimation('normal', 'assets/colision_monos.png');
        colisionMonos.setCollider('rectangle', 0, 0, 115, 61);

        suriMover6 = createSprite(600, 700);
        var myAnimation = suriMover6.addAnimation('parada_trepar', 'assets/33.png');
        suriMover6.addAnimation('trepar', 'assets/33.png',  'assets/36.png');
        suriMover6.setCollider('rectangle', 0, 0, 150, 150);
 
        subir_arbol= true;
        contador_monos=0;
        activar_contador_monos=false;
        boton_arbol=false;
    }

   
    this.draw = function(){
        monosRiendo.play();
        image(fondoEscena4_3, 0,0);
        activar_contador_monos=true;
    
        drawIntroScreen();
        
        drawSprites();
        
        noFill();
        //rama
        //rect(500 , 380, 300 ,150);


    //colisionMonos.debug = mouseIsPressed;
      //  suriMover6.debug = mouseIsPressed;
}//fin de draw


    this.mousePressed = function(){

        if ( mouseX > 900 && mouseX < 900 + 150 && mouseY > 300 && mouseY < 300 + 150) {
            this.sceneManager.showScene(Escena4, key);
            suriMover6.remove();
            monosRiendo.stop();
            colisionMonos.remove();
        }
     
    } //fin de mousePressed



    function drawIntroScreen(){

        //trepar arbol
        if(subir_arbol){
            suriMover6.position.x=600;
            suriMover6.changeAnimation('trepar');
            if(mouseY < suriMover6.position.y - 10) {                    
                suriMover6.velocity.y = -2;
            }else if (mouseY > suriMover6.position.y + 10) {
                suriMover6.velocity.y = 2;
            }else{suriMover6.changeAnimation('parada_trepar');
            suriMover6.velocity.y = 0;
        }
        }


        if(activar_contador_monos){
            contador_monos+=1;
            if (contador_monos == 500) {
                boton_arbol=true;
            }
          }

          if(boton_arbol){
            image(botonArbol, 950, 300);
          }

          suriMover6.collide(colisionMonos);
          
    }//fin de funcion drawIntroScreen

//final de escena

}