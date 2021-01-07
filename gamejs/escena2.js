function Escena2(){
    var  suriMover2;
    var esconder;
    var topo;
    var aguila;
    var final_aguila;
    var colision_aguila;
    var suriRascar;
    var contador_suriRascar;
    var esta_caminando;
    var esta_rascando;
    var act_hueco1;
    var act_hueco2;
    var act_hueco3;
    var ir_escena_3;
 

    this.enter = function(){
        suriMover2 = createSprite(0, 350);

        var myAnimation =  suriMover2.addAnimation('parada', 'assets/08.png');  
       suriMover2.addAnimation('costado', 'assets/00.png',  'assets/07.png');
       suriMover2.addAnimation('rascar', 'assets/29.png',  'assets/32.png');

       aguila = createSprite( 900, 500);
        var anim_aguila= aguila.addAnimation('normal','assets/aguila2.png');
    
      aguila.setCollider('rectangle', 300, 0, 30, 150);

       esconder=false;
       topo= false;
       final_aguila=false;
       colision_aguila= false;
       suriRascar=false;
       contador_suriRascar=0;

       esta_caminando=true;
       esta_rascando=false;

       act_hueco1=false;
       act_hueco2=false;
       act_hueco3=false;

       ir_escena_3=false;
    }


    this.draw = function(){
        image(fondoEscena2, 0,0);
        if(topo){
            image(madriguera, 758 , 178, 422 , 320);
        }
        drawIntroScreen();
   
        aguila.position.x -= 1;
        //aguila.debug = mouseIsPressed;
        //suriMover2.debug = mouseIsPressed;
        
        if(suriMover2.position.x >= 1200){
            this.sceneManager.showScene(Escena3, key);
            suriMover2.remove();
            aguila.remove(); 
            }

            drawSprites(); 
         // actua la colision
        if(esconder){
            image(hoja, 155 , 210);
         }else {colision_aguila;
            if(suriMover2.overlap(aguila)){
                final_aguila=true;
                suriMover2.remove();
                 aguila.remove();
                 final_aguila_FX.play();
                 colision_aguila=false;
                 esconder= false;
                }     
        }

     noFill();         
   //hueco   
 // rect(545, 450, 150, 100); 
  //hoja
 // rect(160 , 230, 259 ,100); 
  //madriguera
  //rect(900 , 240, 150 , 100);

    }// fin de la funcion draw


    this.mousePressed = function(){
        //atajo
if(mouseX>545 && mouseX <545+150 && mouseY >450 && mouseY <450+100){
    this.sceneManager.showScene( Escena3, key );
    suriMover2.remove(); 
    aguila.remove();
  /* suriRascar=true;
   esta_caminando=false;
   esta_rascando=true;
*/

    //hoja
}else if ((mouseX>160 && mouseX <160+259 && mouseY >230 && mouseY <230+100) &&
(suriMover2.position.x >= 160 && suriMover2.position.x <= 160+259)){
    esconder=true;
    //topo
} else if(mouseX>900 && mouseX <900+150 && mouseY >240 && mouseY <240+100){
    topo=true;
    }

    if(final_aguila && mouseX > 900 && mouseX <900+150 && mouseY >300 && mouseY < 300+150){
        //setup();
        this.sceneManager.showScene( Escena1, key );
        final_aguila_FX.stop();
    }
    }//fin de la funcion mousePressed


    function drawIntroScreen(){
//movimiento caminar
if(esta_caminando){
  if(mouseX < suriMover2.position.x - 10) {
    suriMover2.changeAnimation('costado');
    //flip horizontally
    suriMover2.mirrorX(-1);
    //negative x velocity: move left
     suriMover2.velocity.x = -2;

}else if(mouseX > suriMover2.position.x + 10) {
  suriMover2.changeAnimation('costado');
//unflip
  suriMover2.mirrorX(1);
 suriMover2.velocity.x = 2;
} else {
  //if close to the mouse, don't move
   suriMover2.changeAnimation('parada');
   suriMover2.velocity.x = 0;
  } 
}

if(esta_rascando){
    suriMover2.changeAnimation('rascar');
    suriMover2.velocity.x = 0;
    suriMover2.position.y = 350+40;
}

if(final_aguila){
    image(finalAguila, 0, 0);
    image(boton, 950,300 ); 
}

if(colision_aguila)
{suriMover2.collide(aguila); }


/*
if(suriRascar){
    contador_suriRascar +=1;
    if(contador_suriRascar==50){
        act_hueco1=true;   
    } else if(contador_suriRascar==100){
        act_hueco2=true;
        act_hueco1=false;
    }else if(contador_suriRascar==150){
        act_hueco3=true;
        act_hueco2=false;
    }else if(contador_suriRascar==200){
        act_hueco3=false; 
        //ir_escena_3=true;
        
        
        this.sceneManager.showScene( Escena3, key ); 
    }
}*/
   
/*if(contador_suriRascar==200){
    this.sceneManager.showScene( Escena3, key ); 

}*/

      //  this.sceneManager.showScene( Escena4, key ); 
        //aguila.remove();
        //this.sceneManager.showScene( Escena3, key ); 
       // contador_suriRascar=0;

       // suriRascar=false;
       // act_hueco1=false;
      //  act_hueco2=false;
      //  act_hueco3=false;  
     // ir_escena_3=true; // no funciona
    

    if( act_hueco1){
        image(hueco1,suriMover2.position.x-60, suriMover2.position.y );
    }

    if( act_hueco2){
        image(hueco2,suriMover2.position.x-60, suriMover2.position.y );
    }

    if( act_hueco3){
        image(hueco3,suriMover2.position.x-60, suriMover2.position.y );
    }

  /*  if(ir_escena_3){
     this.sceneManager.showScene( Escena3, key );
        image(boton, 950,300 ); 
        aguila.remove();
    }*/


    //text(contador_suriRascar, 100, 200); 

    }//fin de la funcion drawIntroScreen



/*
    this.keyPressed = function(){
        if(keyCode === RIGHT_ARROW){
        this.sceneManager.showScene( Escena3, key );
        suriMover2.remove();
        }
    }
    */

    }// fin de la escena