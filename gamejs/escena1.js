function Escena1()
{ var  suriMover1;
    var caminar;
    var vertical;
    var elegir_camino1;
   var elegir_camino2;
   var elegir_camino3;
   var final_elefante;
   var final_leon;

    var me = this;

    this.enter = function()
    { 
        suriMover1 = createSprite(550, 500);
       //var myAnimation =  
       suriMover1.addAnimation('parada', 'assets/08.png');
       
       suriMover1.addAnimation('costado', 'assets/00.png',  'assets/07.png');
      // suriMover1.addAnimation('adelante', 'assets/10.png', 'assets/17.png'); 
       suriMover1.addAnimation('atras', 'assets/18.png',  'assets/25.png');
      // suriMover1.addAnimation('escuchar', 'assets/26.png', 'assets/28.png');

      elegir_camino1=false; 
      elegir_camino2=false;
      elegir_camino3=false;

        final_elefante= false;
        final_leon = false;
        caminar=true;
        vertical=false;
    }

    this.draw = function(){
        image(fondoEscena1, 0,0);
        
    noFill(); //arboles
      //rect(50, 10, 250,200);
       //rect(450, 10, 250,200);
      // rect(850, 10, 250,200);

       //rocas
       image( base, 100,550);
      // rect(100, 550, 200,100);

       image( base, 450,500);
      //rect(450, 500, 200,100);

       image( base, 900,500);
     //  rect(900, 500, 200,100);

       drawIntroScreen();
       drawSprites(); 

      //cambio de escena o final al terminar el camino
      if(suriMover1.position.y <= 200 &&  
        (elegir_camino1 )){
        this.sceneManager.showScene( Escena2, key );
        suriMover1.remove();

        }else if (suriMover1.position.y <=250 &&  
            (elegir_camino2)){
           final_leon=true;
        //no poner sonido aca
            suriMover1.remove();

        }else if (suriMover1.position.y <= 250 &&  
            (elegir_camino3)){
           final_elefante=true;
        //no poner sonido aca
            suriMover1.remove();
   
    }
   
}


    this.mousePressed = function(){
        //rocas-sonidos
     if (suriMover1.position.x >= 100 && suriMover1.position.x <= 100+200 && mouseY >= 550 && mouseY <= 650 ){
        tamborSuri.play();
 
    }else if(suriMover1.position.x >= 450 && suriMover1.position.x <= 650 &&
        mouseY >= 500 && mouseY <= 600 ){
        tamborLeon.play();
  
    }else if(suriMover1.position.x >= 900 && suriMover1.position.x <= 1100 &&  mouseY >= 500 && mouseY <= 600 ){
     
        tamborElefante.play();
    }

    //arboles
      if((suriMover1.position.x >= 100 && suriMover1.position.x <= 100+200 ) && 
      (mouseX >50 && mouseX < 50+250 && mouseY > 10 && mouseY < 10+200)){
        elegir_camino1=true;
        vertical=true;
        caminar=false;
      
    } else if ((suriMover1.position.x >= 450 && suriMover1.position.x <= 650 ) &&
    (mouseX >450 && mouseX < 450+250 && mouseY > 10 && mouseY < 10+200)){
        elegir_camino2=true;
        vertical=true;
        caminar=false;
        rugido.play();
   
    } else if ((mouseX >850 && mouseX < 850+250) && (mouseY > 10 && mouseY < 10+200)){
        elegir_camino3=true;
        vertical=true;
        caminar=false;
        sonido_elefante.play();
    }

    //reiniciar desde finales malos
    if(final_elefante && mouseX > 900 && mouseX <900+150 && mouseY >300 && mouseY < 300+150){
        this.sceneManager.showScene( Escena1, key );
        sonido_elefante.stop();
     
         
    }   else if (final_leon && mouseX > 900 && mouseX <900+150 && mouseY >300 && mouseY < 300+150){
        this.sceneManager.showScene( Escena1, key );
        rugido.stop();
        
    }

    }



    function drawIntroScreen(){
     //movimiento caminar

     if(caminar){
         vertical=false;
            if(mouseX < suriMover1.position.x - 10) {
                suriMover1.changeAnimation('costado');
                //flip horizontally
                suriMover1.mirrorX(-1);
                //negative x velocity: move left
                suriMover1.velocity.x = -2;
            }
            else if(mouseX > suriMover1.position.x + 10) {
                suriMover1.changeAnimation('costado');
            //unflip
                suriMover1.mirrorX(1);
            suriMover1.velocity.x = 2;
            } else {
                //if close to the mouse, don't move
                suriMover1.changeAnimation('parada');
                suriMover1.velocity.x = 0;
                } 
        }

        if(vertical){
            caminar=false;      
            suriMover1.changeAnimation('atras');
        }
       
       
        
//hacia escena 2
        if(elegir_camino1){
            suriMover1.position.x=180;
            suriMover1.velocity.x = 0;
            suriMover1.velocity.y = -2;
           }

        //hacia cambio de finales malos
        if(elegir_camino2){
        suriMover1.position.x=550;
        suriMover1.velocity.x = 0;
        suriMover1.velocity.y = -2;
       } 

       if(elegir_camino3){
        suriMover1.position.x=1000;
        suriMover1.velocity.x = 0;
        suriMover1.velocity.y = -2;
    }

         if(final_elefante){
            image(finalElefante, 0, 0);
            image(boton, 950,300 );
        }

        if(final_leon){
            image(finalLeon, 0, 0);
            image(boton, 950,300 ); 
            //no poner sonido aca

        }
      
    } 
     

/*    
    this.keyPressed = function(){
        if(keyCode === RIGHT_ARROW){
        this.sceneManager.showScene( Escena2, key );
        suriMover1.remove();
    }
    }
*/
}

