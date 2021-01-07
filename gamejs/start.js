var fondoInicio;
var fondoEscena1 ;
var fondoEscena2;
var fondoEscena3;
var fondoEscena4;
var fondoEscena4_2;
var fondoEscena4_3;
var fondoEscena5;

var suriExcavar;
var creditos;
var intro1;
var intro2;
var intro3;


var base;
var finalLeon;
var finalElefante;
var boton;
var boton_suricatas;
var botonArbol;
var botonReiniciar;

var hoja;
var madriguera;
var sombra_aguila;
var finalAguila;
var suriRascar_img;
var hueco1;
var hueco2;
var hueco3;

var finalSerpiente;
var finalGuepardo;
var ojosGuepardo;

var hojaSuelta;
var nidoCae;
var frutaCae;
var suri_paracaidas;
var finalElefante2;

var final_ganar;
var fondo_robar;

let tamborElefante;
let tamborLeon;
let tamborSuri;
let rugido;
let sonido_elefante;
let sonido_elefante2;

let final_aguila_FX;

let ramasQuebradas;
let final_serpiente;

let secuencia_nido;
let secuencia_paracaidas;

let monosRiendo;
let monoRobando;

let finalGanar;



function preload()
{
    fondoInicio = loadImage("assets/marca.png");  
    fondoEscena1 =  loadImage("assets/caminos.png"); 
    fondoEscena2 =  loadImage("assets/fondo_aguila.png"); 
    fondoEscena3 =  loadImage("assets/fondo_arbol1.png"); 
    fondoEscena4 =  loadImage("assets/fondo_arbol2.png"); 
    fondoEscena4_2 =  loadImage('assets/rama_arbol.png');
    fondoEscena4_3 =  loadImage('assets/monos.png');
    fondoEscena5 =  loadImage("assets/fondo_arbol2_ fruta.png");
    
    suriExcavar = loadImage('assets/excavar00.gif') 
    creditos =  loadImage('assets/creditos.png'); 
    intro1 =  loadImage('assets/intro1.png'); 
    intro2 =  loadImage('assets/intro2.png'); 
    intro3 =  loadImage('assets/intro3.png'); 

    base = loadImage('assets/base.png') 
    finalLeon =  loadImage('assets/final_leon.png'); 
    finalElefante =  loadImage('assets/final_elefante.png'); 
    boton =  loadImage('assets/boton-anim.gif'); 

    boton_suricatas =loadImage('assets/bot-suricatas.png'); 
    botonArbol =  loadImage('assets/bot-arbol.gif'); 
    botonReiniciar =  loadImage('assets/bot-reinicio.gif'); 

    hoja = loadImage('assets/hoja1.png');
    madriguera = loadImage('assets/cueva2.png');
    sombra_aguila = loadImage('assets/aguila2.png');
    finalAguila =  loadImage('assets/final_aguila.png'); 
    suriRascar_img =loadImage('assets/excavar00.gif');
    hueco1 =  loadImage('assets/hueco_1.png'); 
    hueco2 =  loadImage('assets/hueco_2.png'); 
    hueco3 =  loadImage('assets/hueco_3.png'); 


    finalSerpiente =  loadImage('assets/final_serpiente.png'); 
    finalGuepardo =  loadImage('assets/final_guepardo.png'); 
    ojosGuepardo =  loadImage('assets/ojos_guepardo.png'); 

    finalElefante2=loadImage('assets/elefante_final_2.png');

    hojaSuelta =  loadImage('assets/hoja_suelta.png'); 
    nidoCae =  loadImage('assets/nido_cae.png'); 
    frutaCae =  loadImage('assets/fruta_cae.png'); 
    suri_paracaidas= loadImage('assets/baja-suricata.gif'); 

    final_ganar= loadImage('assets/final_anim.gif');
    fondo_robar=loadImage('assets/mono_roba.png');
   

    tamborElefante = loadSound('assets/tambor-02.mp3'); 
    tamborLeon = loadSound('assets/tambor-00.mp3'); 
    tamborSuri = loadSound('assets/tambor-01.mp3');
    rugido = loadSound('assets/final-leon.mp3');
    sonido_elefante = loadSound('assets/final-elefante.mp3');
    sonido_elefante2 = loadSound('assets/final-elefante2.mp3');
    
    final_aguila_FX= loadSound('assets/aguila-fin-malo.mp3');

    ramasQuebradas = loadSound('assets/ramas_nuevo.mp3');
    final_serpiente= loadSound('assets/final-serpiente02.mp3');
   
    secuencia_nido = loadSound('assets/frutas_caen.mp3');
    secuencia_paracaidas = loadSound('assets/caida01.mp3');
    
    monosRiendo= loadSound('assets/monos_riendo.mp3');
    monoRobando  = loadSound('assets/mono_robando.mp3');

    finalGanar = loadSound('assets/triunfo.mp3');
}


function setup()
{
    createCanvas(1200, 700);

    var mgr = new SceneManager();
    mgr.fondoInicio = fondoInicio; // inject bkImage property
    mgr.wire();
    mgr.showScene( Intro );
   
  
        
   
}

  
