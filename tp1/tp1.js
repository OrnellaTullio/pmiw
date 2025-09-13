// link de youtube: https://youtu.be/Tlb8G0CgOnshttps://youtu.be/Tlb8G0CgOns

var ancho = 50;
var largo;
var estado = 0; // 0: original, 1: círculo mediano, 2: círculo grande, 3: invertir colores
var ref; 

function preload(){
ref = loadImage ('imagenderef.jpg');
}

function setup() {
  createCanvas(800, 400);
  noStroke();
} 

function draw() {
  image(ref,0,0);
   dibujarTodo(); 
}

function mousePressed() {
  estado = (estado + 1) % 4;
  dibujarTodo();
}

//reiniciar interacciones
function keyPressed() {
  estado = 0;
  dibujarTodo();
}


function dibujarTodo() {
  push();
  translate(width / 2, 0);
  dibujarFondoCuadriculado(0);
  cuadradoscentro(10);
  pop();
}


function dibujarFondoCuadriculado(desplazamientoX) {
  for (var x = 0; x < width / 2; x += 17) {
    for (var y = 0; y < height; y += 17) {
      var esPar = ((x / 17 + y / 17) % 2 == 0);
      var invertido = (estado == 3);
      fill(invertido ? (esPar ? color(0, 100, 160) : color(50, 200, 120)) : (esPar ? color(50, 200, 120) : color(0, 100, 160)));
      
      rect(x + desplazamientoX, y, 18, 18);

      // tamaño de círculo con if
      if (estado == 1) {
        // map()
        fondoCircleSize = (map(mouseY, height, 0, 6, 9));
  
      } else {
        fondoCircleSize = obtenerTamañoCirculoFondo(estado);
      }

      if (estado == 2) {
        fill(esPar ? color(0, 0, 50) : 255);
      } else {
        fill(esPar ? 255 : color(0, 0, 50));
      }
      ellipse(x + desplazamientoX, y, fondoCircleSize, fondoCircleSize);
    }
  }
}

//dibuja el patron del centro
function cuadradoscentro(des) {
  largo = height / 8;
  // Cuadrados del centro
  for (var x = ancho; x < ancho + 270; x += 21) {
    for (var y = largo; y < largo + 270; y += 21) {
      var esPar = ((x - 50  / 20  + y - 50 / 20 ) % 2 == 0);
      var invertido = (estado == 3);
 if (estado == 3) {
        fill(esPar ? color(0, 100, 160) : color(50, 200, 120));
      } else {
        fill(esPar ? color(50, 200, 120) :  color(0, 100, 160));
      }
      
      rect(x + des, y + des, 21, 21);
    }
  }

  // Círculos del centro
  for (var x = ancho; x < ancho + 290; x += 21) {
    for (var y = largo; y < largo + 290; y += 21) {
      esPar = ((x - 50 / 20 + y - 50 / 20) % 2 == 0);
      var circleSize;

      if (estado == 1) {
        // map()
        circleSize = (map(mouseY, 0, height, 4, 9));
  
      } else {
        circleSize = obtenerTamañoCirculoCentro(estado);
      }


      if (estado == 2) {
        fill(esPar ? 255 : color(0, 0, 50));
      } else {
        fill(esPar ? color(0, 0, 50) : 255);
      }

      ellipse(x + des, y + des, circleSize, circleSize);
    }
  }
}

//define tamaño del circulo por click

function obtenerTamañoCirculoCentro (estadoActual) {
  if (estadoActual == 0 || estadoActual == 3) return 5;
  else return 7; // estado 2 
}

function obtenerTamañoCirculoFondo (estadoActual){
if (estadoActual == 0 || estadoActual == 2) return 4;
else return 7
}

