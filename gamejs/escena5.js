function Escena5(){
    var suriMover7;
    var ganar;
    var activar_contador_final;
    var contador_final;
    var final_robar;
    var agarrar_fruta;




    this.enter = function(){
        suriMover7 = createSprite(900,800);
        var myAnimation = suriMover7.addAnimation('parada', 'assets/08.png');
        suriMover7.addAnimation('costado', 'assets/00.png', 'assets/07.png');
        suriMover7.setCollider('rectangle', 0, 0, 150, 150);

        fruta = createSprite(200,580);
        var myAnimation = fruta.addAnimation('normal', 'assets/la_fruta.png');
      
        fruta.setCollider('rectangle', 0, 0, 50, 50);

        ganar=false;

        activar_contador_final=false;
        contador_final=0;
        final_robar=false;
        agarrar_fruta =true;
    }


    this.draw = function(){
        image(fondoEscena5, 0,0);
        image(hojaSuelta, 900,500);
        drawIntroScreen();
        
        drawSprites();

        //fruta.debug = mouseIsPressed;
        //suriMover7.debug = mouseIsPressed;
        activar_contador_final=true;

       // suriMover7.collide(fruta)
        
        noFill();
       //fruta
        //rect(170,550, 70 ,90);
        //rect(0,550, 400 ,90);
       
    
    }//fin de draw


    this.mousePressed = function(){
        if ((mouseX>170 && mouseX <170+70 && mouseY >550 && mouseY <550+90) &&
        (suriMover7.position.x <= 400)){
            ganar=true;
            finalGanar.play();
            suriMover7.remove();
            fruta.remove();
        }

        if (final_robar && mouseX > 900 && mouseX < 900 + 150 && mouseY > 300 && mouseY < 300 + 150) {
          this.sceneManager.showScene( Escena1, key );
          //setup();
        }

        if (ganar && mouseX > 900 && mouseX < 900 + 150 && mouseY > 300 && mouseY < 300 + 150) {
          finalGanar.stop();
        setup();
        }

    }//fin mousePressed



    function drawIntroScreen(){
       //movimiento caminar
       suriMover7.position.y=500;

  if(mouseX < suriMover7.position.x - 10) {
    suriMover7.changeAnimation('costado');
    //flip horizontally
    suriMover7.mirrorX(-1);
    //negative x velocity: move left
     suriMover7.velocity.x = -2;

}else if(mouseX > suriMover7.position.x + 10) {
  suriMover7.changeAnimation('costado');
//unflip
  suriMover7.mirrorX(1);
 suriMover7.velocity.x = 2;
} else {
  //if close to the mouse, don't move
   suriMover7.changeAnimation('parada');
   suriMover7.velocity.x = 0;
  }       


  //finales
if(ganar){
image(final_ganar, 0,0);
image(botonReiniciar, 950, 300);
activar_contador_final=false;
contador_final=0;
}

if(activar_contador_final){
  contador_final+=1;
  if (contador_final == 500 && !ganar) {
     final_robar = true;
  }
}

if(final_robar){
  image(fondo_robar, 0,0);
  suriMover7.remove();
  fruta.remove();
  image(boton, 950, 300);
  activar_contador_final=false;
  contador_final=0;
  }


 //text(contador_final, 100, 200); 

    }//fin de funcion drawIntroScreen



    

//final de clase

}