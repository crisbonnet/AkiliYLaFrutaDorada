function Intro(){
  var activar_creditos;
  var activar_contador_intro;
  var contador_intro;

  var act_1;
  var act_2;
  var act_3;




    this.enter = function(){
    activar_creditos=false;
    activar_contador_intro=false;
    contador_intro= 0;

    act_1=false;
    act_2=false;
    act_3=false;

    }
        

    this.draw = function() {
        image( this.sceneManager.fondoInicio, 0, 0);
        drawIntroScreen();   

        if( activar_contador_intro){
            contador_intro +=1;
            act_1=true;
            if(contador_intro== 50){
                act_1=false;
                act_2=true;
        }else if(contador_intro== 150){
            act_2=false;
                act_3=true;
        }else if(contador_intro== 250){
            
            act_3=false;
            this.sceneManager.showScene( Escena1, key ); 
            contador_intro=0;
            activar_contador_intro=false;
        }
            }
        
            if(act_1){
                image(intro1,0,0);
            }
        
            if(act_2){
                image(intro2,0,0);
            }
            if(act_3){
                image(intro3,0,0);
            }
    }



    this.mousePressed = function(){
        if((mouseX >680-(268/2) && mouseX < 680+(268/2)) && (mouseY > 550-(141/2) && mouseY < 550 +(141/2))){
            //this.sceneManager.showScene( Escena1, key ); 
            activar_contador_intro=true;    
        }


        if((mouseX >20 && mouseX < 20+150) && (mouseY > 20 && mouseY < 20+150)){
            activar_creditos=true;
        }

       if(activar_creditos && (mouseX >1035 && mouseX < 1035+50 && mouseY > 98 && mouseY < 98+50)){
        activar_creditos=false;
        }
            
    }// fin mousePressed
    

    function drawIntroScreen(){
    
           image(suriExcavar,550, 485 );
           image(boton_suricatas, 20,20);


           if(activar_creditos){
            image(creditos,0,0);
           }

    }//fin de drawIntroScreen
   

}// fin de intro

      

       
  