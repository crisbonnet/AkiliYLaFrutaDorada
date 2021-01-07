function Escena3() {
    var suriMover3;
    var elegir_serpiente;
    var pisar_ramas;
    var ramitas;
    var contador;
    var activar_contador;
    var final_guepardo;
    var mirada_guepardo;
    var elegir_caminoArbol;
    var lianas;
    var caminar;
    var vertical;



    this.enter = function () {

        ramitas = createSprite(1000, 620);
        var anim_ramitas = ramitas.addAnimation('normal', 'assets/ramitas.png');
        ramitas.setCollider('rectangle', 0, 0, 400, 150);


        lianas = createSprite(440, 164);
        var anim_lianas = lianas.addAnimation('normal', 'assets/lianas.png');

        //lianas.setCollider('rectangle', 0, 0, 400, 150);

        suriMover3 = createSprite(0, 500);
        var myAnimation = suriMover3.addAnimation('parada', 'assets/08.png');
        suriMover3.addAnimation('costado', 'assets/00.png', 'assets/07.png');
        suriMover3.addAnimation('atras', 'assets/18.png',  'assets/25.png');
        suriMover3.setCollider('rectangle', 0, 0, 150, 150);

        elegir_serpiente = false;
        pisar_ramas = true;
        contador = 0;
        activar_contador = false;
        final_guepardo = false;
        mirada_guepardo = false;
        elegir_caminoArbol=false;
        caminar=true;
        vertical=false;
    }


    this.draw = function () {
        image(fondoEscena3, 0, 0);
        drawIntroScreen();

        //ramitas.debug = mouseIsPressed;
        //suriMover3.debug = mouseIsPressed;

        drawSprites();

        if (activar_contador) {
            contador += 1;
        }

        if (contador == 150) {
            final_guepardo = true;
        }

        if (mirada_guepardo) {
            image(ojosGuepardo, 1071, 347);
        }

        if(suriMover3.position.y <= 200 &&  
            (elegir_caminoArbol )){
            this.sceneManager.showScene( Escena4, key );
            suriMover3.remove();
            ramitas.remove();
            lianas.remove();
            }

        noFill();
        //ramas
        //rect(690 , 508, 500 ,200);
        //serpiente
        //rect(320 , 0, 250 ,320);
        //árbol lejano
        //rect(0 , 0, 320 , 257);

    }//termina la funcion draw


    this.mousePressed = function () {
        if ((mouseX > 320 && mouseX < 320 + 250) && (mouseY > 0 && mouseY < 320)) {
            final_serpiente.play();
            suriMover3.remove();
            ramitas.remove();
            lianas.remove();
            elegir_serpiente = true;
        }

        if (elegir_serpiente && mouseX > 900 && mouseX < 900 + 150 && mouseY > 300 && mouseY < 300 + 150) {
            this.sceneManager.showScene( Escena1, key );
            //setup();
        } else if (final_guepardo && mouseX > 900 && mouseX < 900 + 150 && mouseY > 300 && mouseY < 300 + 150) {
            this.sceneManager.showScene( Escena1, key );
            //setup();
        }

        if((suriMover3.position.x >= 100 && suriMover3.position.x <= 100+200 ) && 
        (mouseX > 0 && mouseX < 320 && mouseY > 0 && mouseY < 257)){
          elegir_caminoArbol=true;
          vertical=true;
        caminar=false;
        }

    }//termina la funcion mousepressed


    function drawIntroScreen() {
        //movimiento caminar
        if(caminar){
            vertical=false;
               if(mouseX < suriMover3.position.x - 10) {
                   suriMover3.changeAnimation('costado');
                   //flip horizontally
                   suriMover3.mirrorX(-1);
                   //negative x velocity: move left
                   suriMover3.velocity.x = -2;
               }
               else if(mouseX > suriMover3.position.x + 10) {
                   suriMover3.changeAnimation('costado');
               //unflip
                   suriMover3.mirrorX(1);
               suriMover3.velocity.x = 2;
               } else {
                   //if close to the mouse, don't move
                   suriMover3.changeAnimation('parada');
                   suriMover3.velocity.x = 0;
                   } 
           }
   
           if(vertical){
               caminar=false;      
               suriMover3.changeAnimation('atras');
           }



        //hacia escena 4
        if(elegir_caminoArbol){
            suriMover3.position.x=180;
            suriMover3.velocity.x = 0;
            suriMover3.velocity.y = -2;
           }



        if (elegir_serpiente) {
            image(finalSerpiente, 0, 0);
            image(boton, 950, 300);
        }

        if (final_guepardo) {
            image(finalGuepardo, 0, 0);
            image(boton, 950, 300);
            suriMover3.remove();
            ramitas.remove();
            lianas.remove();
            mirada_guepardo = false;
            contador = 0;
        }

        if (pisar_ramas) {
            suriMover3.collide(ramitas);
        }


        if (pisar_ramas) {
            if (suriMover3.overlap(ramitas)) {
                ramasQuebradas.play();
                pisar_ramas = false;
                activar_contador = true;
                mirada_guepardo = true;

            }
        }
        //text(contador, 100, 100);
    }//termina la funcion


/*
    this.keyPressed = function () {
        if (keyCode === RIGHT_ARROW) {
            this.sceneManager.showScene(Escena4, key);
            suriMover3.remove();
        }
    }
*/
}