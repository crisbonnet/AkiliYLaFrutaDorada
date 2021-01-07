function Arbol2(){
    var suriMover5;
    var subir_arbol;
    var tocar_rama;
    var contador_nido;
    var activar_contador_nido;
    var fondo_nido_cae;
    var fondo_fruta_cae;
    var paracaidas;
    var activar_contador_paracaidas;
    var contador_paracaidas;
    var fondo_suri_cae;
    var activar_reloj_caminata_h;
    var reloj_caminata_h;
    var limite_suri;

    this.enter = function(){

        colisionRama = createSprite(521,339);
        var anim_colision = colisionRama.addAnimation('normal', 'assets/colision_rama.png');
        colisionRama.setCollider('rectangle', -40, 0, 20, 74);

        suriMover5 = createSprite(300, 700);
        var myAnimation = suriMover5.addAnimation('parada', 'assets/08.png');
        suriMover5.addAnimation('costado', 'assets/00.png', 'assets/07.png');
        suriMover5.addAnimation('parada_trepar', 'assets/33.png');
        suriMover5.addAnimation('trepar', 'assets/33.png',  'assets/36.png');
        suriMover5.setCollider('rectangle', 0, 0, 150, 150);

        ramaSuelta = createSprite(1000,530);
        var anim_ramitas = ramaSuelta.addAnimation('normal', 'assets/rama_suelta.png');

        subir_arbol= true;
        tocar_rama=false;
        contador_nido=0;
        activar_contador_nido=false;
        fondo_nido_cae= false;
        fondo_fruta_cae=false;
        paracaidas=false;
        activar_contador_paracaidas=false;
        contador_paracaidas=0;
        fondo_suri_cae=false;
        reloj_caminata_h=0;
        activar_reloj_caminata_h=false;
        limite_suri= false;
    }


    this.draw = function(){
        image(fondoEscena4_2, 0,0);
        image(hojaSuelta, 550,430);


        drawIntroScreen();
        
        drawSprites();

        //nido
        if (activar_contador_nido) {
            //no poner sonido aca
           paracaidas=true;
            contador_nido += 1;
            if (contador_nido == 80) {
                fondo_nido_cae = true;
            }else  if (contador_nido == 150) {
                fondo_nido_cae = false;
                fondo_fruta_cae = true;
        }else if(contador_nido == 250){
            fondo_fruta_cae = false;
        }
        }

        if(fondo_nido_cae){
            image(nidoCae, 0,0);
            //no poner sonido aca
        }

        if(fondo_fruta_cae){
            image(frutaCae, 0,0);
        }

        //paracaidas
        if (activar_contador_paracaidas) {
              contador_paracaidas += 1;
             if (contador_paracaidas == 5) {
                fondo_suri_cae = true;
           }else  if (contador_paracaidas == 100) {
                this.sceneManager.showScene( Escena5, key );
            suriMover5.remove();
            ramaSuelta.remove();
            }
        }
            
            if(fondo_suri_cae){
                image(suri_paracaidas, 0,0);
            }

        
        noFill();
        //rama
        //rect(500 , 380, 300 ,150);
        //hoja
        //rect(550,430, 180 ,120);
        //nido
        //rect(930,460, 200 ,100);
        
       /* if(suriMover5.position.x >= 100 && suriMover5.position.x <= 100+300){
            subir_arbol=true;
            tocar_rama=false;
        }*/

        //sube de nivel
        if(suriMover5.position.y <= 20 ){
            this.sceneManager.showScene( Arbol3, key );
            suriMover5.remove();
            ramaSuelta.remove();
            colisionRama.remove();
            }

            //colisionRama.debug = mouseIsPressed;
        //suriMover5.debug = mouseIsPressed;

}//fin de draw


    this.mousePressed = function(){
        //caminar por rama
      if( (mouseX > 500 && mouseX <= 500+600) && (mouseY >= 380 && mouseY <=380+150)){
      tocar_rama= true;
      subir_arbol=false;
      activar_reloj_caminata_h=true;
    }

    if((mouseX >930 && mouseX <930+200 && mouseY >460 && mouseY <460+100) && 
    (suriMover5.position.x>930 && suriMover5.position.x < 930+200)){
       // final_serpiente.play();//cambiar sonido a rama partida y elefante rascandose
        activar_contador_nido=true;
        secuencia_nido.play();
        ramaSuelta.remove();  
    }
//volver a trepar
      if( tocar_rama){
          if(mouseX >100 && mouseX <500){
            subir_arbol=true;
            tocar_rama=false;
            limite_suri=false;
            activar_reloj_caminata_h=false;
            reloj_caminata_h=0;
            limite_suri=false;
        }
    }

    
    if(paracaidas){
    if((mouseX >550 && mouseX <550+180 && mouseY >430 && mouseY <430+120) && 
    (suriMover5.position.x>550 && suriMover5.position.x < 550+180) &&
    activar_contador_nido){
    activar_contador_paracaidas=true;
    secuencia_paracaidas.play();
    colisionRama.remove();
}}
    }



    function drawIntroScreen(){
        //movimiento caminar
        if(tocar_rama){
            subir_arbol=false;
            suriMover5.position.y=300;
        if (mouseX < suriMover5.position.x - 10) {
            suriMover5.changeAnimation('costado');
            //flip horizontally
            suriMover5.mirrorX(-1);
            //negative x velocity: move left
            suriMover5.velocity.x = -2;
        }
        else if (mouseX > suriMover5.position.x + 10) {
            suriMover5.changeAnimation('costado');
            //unflip
            suriMover5.mirrorX(1);
            suriMover5.velocity.x = 2;
        } else {
            //if close to the mouse, don't move
            suriMover5.changeAnimation('parada');
            suriMover5.velocity.x = 0;
        }
    }

        //trepar arbol
        if(subir_arbol){   
            tocar_rama=false;
            suriMover5.position.x=400;
            suriMover5.changeAnimation('trepar');
            if(mouseY < suriMover5.position.y - 10) {                    
                suriMover5.velocity.y = -2;
            }else if (mouseY > suriMover5.position.y + 10) {
                suriMover5.velocity.y = 2;
            }else{suriMover5.changeAnimation('parada_trepar');
            suriMover5.velocity.y = 0;
        }
        }

        if(activar_reloj_caminata_h){
            reloj_caminata_h +=1;
            if(reloj_caminata_h ==100){
                limite_suri=true;
            }
        }


        if(limite_suri){ // queda trabado y no se mueve mas en x
            suriMover5.collide(colisionRama);
                
             } 
            

      // text(reloj_caminata_h, 100, 100); 
        //text(contador_paracaidas, 100, 200); 

    }//fin de funcion drawIntroScreen


/*
    this.keyPressed = function () {
        if (keyCode === UP_ARROW) {
            this.sceneManager.showScene(Arbol3, key);
            suriMover5.remove();
        }else if (keyCode === RIGHT_ARROW) {
            this.sceneManager.showScene(Escena5, key);
            suriMover5.remove();
        }
    }
*/


}//final de clase