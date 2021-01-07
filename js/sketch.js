//let sketch = function(p) {

  let  fondo1; 
  let estado;

function preload(){
  fondo1 = loadImage('assets/caminos.png'); 

}

  function setup() {
    createCanvas(1200, 700);
    estado= "inicio";
  }
  
  function draw() {
    if(estado.equals("inicio")){
    image(fondo1, 0, 0);
    } else{background(0);}
    // Muestra la imagen en la posición (0, height/2) a la mitad del tamaño
    
  }
//};

//let myp5 = new p5(sketch);