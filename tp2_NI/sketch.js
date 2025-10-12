let estadoActual = 'pan1';
let flecha, fleActiva;
let imagenes = [];
let textos = [];
let explosion, tension, ambiente, magia;
let isAmbientePlaying = false;

function preload() {
  // Sonidos
  explosion = loadSound('data/explosion.mp3');
  tension = loadSound('data/musica_ tension.mp3');
  ambiente = loadSound('data/happy_song1.mp3');
  magia = loadSound('data/ruido_magia.mp3');

  // Imágenes base
  fleActiva = loadImage('data/FlechaAct.png');
  flecha = loadImage('data/flechaInac.png');

  imagenes = [
    loadImage('data/PANTALLA1.png'),      // 0
    loadImage('data/PANTALLA2.png'),      // 1
    loadImage('data/PANTALLA3.png'),      // 2
    loadImage('data/PANTALLA4.png'),      // 3
    loadImage('data/PANTALLA5.png'),      // 4
    loadImage('data/twi_habla_con_Star.png'), // 5
    loadImage('data/Cañon.png'),          // 6
    loadImage('data/publico.png'),        // 7
    loadImage('data/quimera.png'),        // 8
    loadImage('data/GE1.png'),            // 9
    loadImage('data/GE2.png'),            // 10
    loadImage('data/biblioteca.jpg'),     // 11
    loadImage('data/PANTALLA7.png'),      // 12
    loadImage('data/PANTALLA8.jpg'),      // 13
    // Nuevas imágenes (14 a 19)
    loadImage('data/no_puede_terminar.png'), // 14
    loadImage('data/final_malo.png'),        // 15
    loadImage('data/final_verdadero1.png'),  // 16
    loadImage('data/final_verdadero2.png'),  // 17
    loadImage('data/final_verdadero3.png'),  // 18
    loadImage('data/final_verdadero4.png')   // 19
  ];

  textos = [
    loadStrings('data/diaInicio.txt'),    // 0
    loadStrings('data/txtTrixie.txt'),    // 1
    loadStrings('data/txtTwi.txt'),       // 2
    loadStrings('data/txtFlutter.txt'),   // 3
    loadStrings('data/txtRainbow.txt')    // 4
  ];
}

function setup() {
  createCanvas(640, 480);
  textSize(22);
  textFont('Candara');
  textAlign(CENTER, CENTER);
}

function draw() {
  if (estadoActual === 'pan1') {
    drawPan1();
  } else if (estadoActual === 'pan2') {
    drawPan2();
  } else if (estadoActual === 'pan3') {
    drawPan3();
  } else if (estadoActual === 'pan4') {
    drawPan4();
  } else if (estadoActual === 'Mains1') {
    drawMains1();
  } else if (estadoActual.startsWith('Trixie')) {
    drawTrixiePath();
  } else if (estadoActual.startsWith('Flutter')) {
    drawFlutterPath();
  } else if (estadoActual.startsWith('Apple')) {
    drawApplePath();
  } else if (estadoActual.startsWith('Twi') || estadoActual.startsWith('Rar') || estadoActual.startsWith('FinalTwi')) {
    drawTwiPath();
  }
}

function mousePressed() {
  if (estadoActual === 'pan1') {
    mousePan1();
  } else if (estadoActual === 'pan2') {
    mousePan2();
  } else if (estadoActual === 'pan3') {
    mousePan3();
  } else if (estadoActual === 'pan4') {
    mousePan4();
  } else if (estadoActual === 'Mains1') {
    mouseMains1();
  } else if (estadoActual.startsWith('Trixie')) {
    mouseTrixiePath();
  } else if (estadoActual.startsWith('Flutter')) {
    mouseFlutterPath();
  } else if (estadoActual.startsWith('Apple')) {
    mouseApplePath();
  } else if (estadoActual.startsWith('Twi') || estadoActual.startsWith('Rar') || estadoActual.startsWith('FinalTwi')) {
    mouseTwiPath();
  }
}

function botoncito(posX, posY, tamX, tamY, textoB) {
  if (overMouse(posX, posY, tamX, tamY)) {
    fill(100, 100, 100, 200);
  } else {
    fill(50, 50, 50, 200);
  }
  stroke(255);
  rect(posX, posY, tamX, tamY, 10);
  noStroke();
  fill(255);
  text(textoB, posX + tamX / 2, posY + tamY / 2);
}

function overMouse(posX, posY, tamX, tamY) {
  return mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY;
}

function botonparacontinuar(posX, posY) {
  const tamX = flecha.width;
  const tamY = flecha.height;
  if (overMouse(posX, posY, tamX, tamY)) {
    image(fleActiva, posX, posY);
  } else {
    image(flecha, posX, posY);
  }
}

function dibujarTexto(contenido, x, y, w, h) {
  fill(0, 0, 0, 150);
  rect(x, y, w, h, 10);
  fill(255);
text(contenido, x + 5 / 2, y + h / 2, width - 40);
}

function drawPan1() {
  image(imagenes[0], 0, 0, width, height);
  dibujarTexto(textos[0][0], 20, 80, 600, 320);
  botonparacontinuar(520, 20);
}
function mousePan1() {
  if (overMouse(520, 20, flecha.width, flecha.height)) {
    estadoActual = 'pan2';
    if (!isAmbientePlaying) {
      ambiente.loop();
      isAmbientePlaying = true;
    }
  }
}

function drawPan2() {
  image(imagenes[1], 0, 0, width, height);
  dibujarTexto(textos[0][1], 20, 300, 600, 160);
  botonparacontinuar(520, 20);
}
function mousePan2() {
  if (overMouse(520, 20, flecha.width, flecha.height)) estadoActual = 'pan3';
}

function drawPan3() {
  image(imagenes[1], 0, 0, width, height);
  dibujarTexto(textos[0][2], 20, 300, 600, 160);
  botonparacontinuar(520, 20);
}
function mousePan3() {
  if (overMouse(520, 20, flecha.width, flecha.height)) estadoActual = 'pan4';
}

function drawPan4() {
  image(imagenes[1], 0, 0, width, height);
  dibujarTexto(textos[0][3], 20, 300, 600, 160);
  botoncito(80, 400, 190, 50, "ir al spa");
  botoncito(340, 400, 240, 50, "Adelantar las lecciones");
}
function mousePan4() {
  if (overMouse(80, 400, 190, 50)) estadoActual = 'Trixie1';
  if (overMouse(340, 400, 240, 50)) estadoActual = 'Mains1';
}

function drawMains1() {
  image(imagenes[1], 0, 0, width, height);
  dibujarTexto("¡Debería de pedirle ayuda a mis amigas!\nEllas sabrán como ayudarme. Hm...\n¿pero a cuales les pido ayuda?", 20, 200, 600, 100);
  botoncito(40, 390, 150, 60, "Twilight y\nRarity");
  botoncito(240, 390, 150, 60, "Pinkie Pie y\nFluttershy");
  botoncito(440, 390, 150, 60, "Rainbow y\nApplejack");
}
function mouseMains1() {
  if (overMouse(40, 390, 150, 60)) estadoActual = 'Twi1';
  if (overMouse(240, 390, 150, 60)) estadoActual = 'Flutter1';
  if (overMouse(440, 390, 150, 60)) estadoActual = 'Apple1';
}


// Camino Trixie

function drawTrixiePath() {
  if (estadoActual === 'Trixie1') {
    image(imagenes[2], 0, 0, width, height);
    dibujarTexto(textos[1][0], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie2') {
    image(imagenes[2], 0, 0, width, height);
    dibujarTexto(textos[1][1], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie3') {
    image(imagenes[3], 0, 0, width, height);
    dibujarTexto(textos[1][2], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie4') {
    image(imagenes[3], 0, 0, width, height);
    dibujarTexto(textos[1][3], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie5') {
    image(imagenes[3], 0, 0, width, height);
    dibujarTexto(textos[1][4], 20, 270, 600, 200);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie6') {
    image(imagenes[4], 0, 0, width, height);
    dibujarTexto(textos[1][5], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie7') {
    image(imagenes[4], 0, 0, width, height);
    dibujarTexto(textos[1][6], 20, 270, 600, 200);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie8') {
    image(imagenes[4], 0, 0, width, height);
    dibujarTexto(textos[1][7], 20, 270, 600, 200);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie9') {
    image(imagenes[5], 0, 0, width, height);
    dibujarTexto(textos[1][9], 20, 15, 600, 210);
    botoncito(80, 400, 220, 50, 'Si');
    botoncito(340, 400, 220, 50, "No");
  } else if (estadoActual === 'Trixie10' || estadoActual === 'Trixie11') {
    image(imagenes[6], 0, 0, width, height);
    dibujarTexto(textos[1][10], 20, 270, 600, 200);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie12' || estadoActual === 'Trixie13') {
    image(imagenes[8], 0, 0, width, height);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie14') {
    image(imagenes[7], 0, 0, width, height);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie15') {
    image(imagenes[7], 0, 0, width, height);
    botoncito(220, 400, 200, 50, "Volver al menu");
  } else if (estadoActual === 'Trixie16') {
    image(imagenes[9], 0, 0, width, height);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie17') {
    image(imagenes[10], 0, 0, width, height);
    dibujarTexto(textos[1][11], 20, 20, 600, 100);
    botoncito(220, 400, 200, 50, "Volver al menu");
  }
}

function mouseTrixiePath() {
  let esContinuar = overMouse(520, 20, flecha.width, flecha.height);
  if (esContinuar) {
    if (estadoActual === 'Trixie1') estadoActual = 'Trixie2';
    else if (estadoActual === 'Trixie2') estadoActual = 'Trixie3';
    else if (estadoActual === 'Trixie3') estadoActual = 'Trixie4';
    else if (estadoActual === 'Trixie4') estadoActual = 'Trixie5';
    else if (estadoActual === 'Trixie5') estadoActual = 'Trixie6';
    else if (estadoActual === 'Trixie6') estadoActual = 'Trixie7';
    else if (estadoActual === 'Trixie7') estadoActual = 'Trixie8';
    else if (estadoActual === 'Trixie8') estadoActual = 'Trixie9';
    else if (estadoActual === 'Trixie10') estadoActual = 'Trixie12';
    else if (estadoActual === 'Trixie11') estadoActual = 'Trixie13';
    else if (estadoActual === 'Trixie12') estadoActual = 'Trixie14';
    else if (estadoActual === 'Trixie13') estadoActual = 'Trixie15';
    else if (estadoActual === 'Trixie14') estadoActual = 'Trixie16';
    else if (estadoActual === 'Trixie16') estadoActual = 'Trixie17';
  } else if (estadoActual === 'Trixie9') {
    if (overMouse(80, 400, 220, 50)) estadoActual = 'Trixie10';
    if (overMouse(340, 400, 220, 50)) estadoActual = 'Trixie11';
  } else if (estadoActual === 'Trixie15' || estadoActual === 'Trixie17') {
    if (overMouse(220, 400, 200, 50)) {
      estadoActual = 'pan1';
      ambiente.stop();
      isAmbientePlaying = false;
    }
  }
}


// Camino Flutter

function drawFlutterPath() {
  image(imagenes[12], 0, 0, width, height);
  if (estadoActual === 'Flutter1') {
    dibujarTexto(textos[3][0], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Flutter2') {
    dibujarTexto(textos[3][1], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Flutter3') {
    dibujarTexto(textos[3][2], 20, 180, 600, 120);
    botoncito(80, 400, 220, 50, 'Es demasiado lenta');
    botoncito(340, 400, 220, 50, "Logra atraparlos");
  } else if (estadoActual === 'FlutterBE1') {
    dibujarTexto(textos[3][3], 20, 180, 600, 120);
    botoncito(80, 400, 220, 50, 'Si, pobre desgraciada');
    botoncito(340, 400, 220, 50, "NO");
  } else if (estadoActual === 'FlutterBE2') {
    dibujarTexto(textos[3][4], 20, 20, 600, 100);
    botoncito(220, 400, 200, 50, "Volver al menu");
  } else if (estadoActual === 'FlutterGE1') {
    dibujarTexto(textos[3][5], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'FlutterGE2') {
    dibujarTexto(textos[3][6], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'FlutterGE3') {
    dibujarTexto(textos[3][7], 20, 20, 600, 100);
    botoncito(220, 400, 200, 50, "Volver al menu");
  }
}

function mouseFlutterPath() {
  let esContinuar = overMouse(520, 20, flecha.width, flecha.height);
  if (esContinuar) {
    if (estadoActual === 'Flutter1') estadoActual = 'Flutter2';
    else if (estadoActual === 'Flutter2') {
      estadoActual = 'Flutter3';
      ambiente.stop();
      isAmbientePlaying = false;
      explosion.play();
    }
    else if (estadoActual === 'FlutterGE1') estadoActual = 'FlutterGE2';
    else if (estadoActual === 'FlutterGE2') estadoActual = 'FlutterGE3';
  } else if (estadoActual === 'Flutter3') {
    if (overMouse(80, 400, 220, 50)) estadoActual = 'FlutterBE1';
    if (overMouse(340, 400, 220, 50)) estadoActual = 'FlutterGE1';
    if (!isAmbientePlaying) {
      ambiente.loop();
      isAmbientePlaying = true;
    }
  } else if (estadoActual === 'FlutterBE1') {
    if (overMouse(80, 400, 220, 50)) estadoActual = 'FlutterGE1';
    if (overMouse(340, 400, 220, 50)) estadoActual = 'FlutterBE2';
  } else if (estadoActual === 'FlutterBE2' || estadoActual === 'FlutterGE3') {
    if (overMouse(220, 400, 200, 50)) {
      estadoActual = 'pan1';
      ambiente.stop();
      isAmbientePlaying = false;
    }
  }
}


// Camino apple

function drawApplePath() {
  image(imagenes[13], 0, 0, width, height);
  if (estadoActual === 'Apple1') {
    dibujarTexto(textos[4][0], 20, 280, 600, 180);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Apple2') {
    dibujarTexto(textos[4][1], 20, 180, 600, 120);
    botoncito(80, 400, 220, 50, 'Se tropieza');
    botoncito(340, 400, 220, 60, "Si, a pesar de\nsu velocidad");
  } else if (estadoActual === 'AppleBE1') {
    dibujarTexto(textos[4][2], 20, 180, 600, 120);
    botoncito(80, 400, 220, 50, 'Que siga intentándolo');
    botoncito(340, 400, 220, 50, "Que se vuelva a casa");
  } else if (estadoActual === 'AppleBE2') {
    dibujarTexto(textos[4][3], 20, 20, 600, 120);
    botoncito(220, 400, 200, 50, "Volver al menu");
  } else if (estadoActual === 'AppleGE1') {
    dibujarTexto(textos[4][4], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'AppleGE2') {
    dibujarTexto(textos[4][5], 20, 20, 600, 150);
    botoncito(220, 400, 200, 50, "Volver al menu");
  }
}

function mouseApplePath() {
  let esContinuar = overMouse(520, 20, flecha.width, flecha.height);
  if (esContinuar) {
    if (estadoActual === 'Apple1') estadoActual = 'Apple2';
    else if (estadoActual === 'AppleGE1') estadoActual = 'AppleGE2';
  } else if (estadoActual === 'Apple2') {
    if (overMouse(80, 400, 220, 50)) estadoActual = 'AppleBE1';
    if (overMouse(340, 400, 220, 60)) estadoActual = 'AppleGE1';
  } else if (estadoActual === 'AppleBE1') {
    if (overMouse(80, 400, 220, 50)) estadoActual = 'AppleGE1';
    if (overMouse(340, 400, 220, 50)) estadoActual = 'AppleBE2';
  } else if (estadoActual === 'AppleBE2' || estadoActual === 'AppleGE2') {
    if (overMouse(220, 400, 200, 50)) {
      estadoActual = 'pan1';
      ambiente.stop();
      isAmbientePlaying = false;
    }
  }
}


// camino twi

function drawTwiPath() {
  // Lógica de cambio de imagen
  if (estadoActual === 'Twi4') {
    image(imagenes[1], 0, 0, width, height);
  } else if (estadoActual === 'Twi5') {
    image(imagenes[14], 0, 0, width, height);
  } else if (estadoActual === 'TwiBD1' || estadoActual === 'TwiBD2') {
    image(imagenes[15], 0, 0, width, height);
  } else if (estadoActual === 'TwiTE1') {
    image(imagenes[16], 0, 0, width, height);
  } else if (estadoActual === 'TwiTE2') {
    image(imagenes[17], 0, 0, width, height);
  } else if (estadoActual === 'TwiTE3') {
    image(imagenes[18], 0, 0, width, height);
  } else if (estadoActual === 'FinalTwi') {
    image(imagenes[19], 0, 0, width, height);
  } else {
    image(imagenes[11], 0, 0, width, height);
  }

  // Lógica de texto y botones
  if (estadoActual === 'Twi1') {
    dibujarTexto(textos[2][1], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Twi2') {
    dibujarTexto(textos[2][2], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Twi3') {
    dibujarTexto(textos[2][3], 20, 250, 600, 210);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Twi4') {
    dibujarTexto("¿Qué elegira Starlight?", 20, 300, 600, 160);
    botoncito(80, 400, 200, 50, "Hechizos de costura");
    botoncito(340, 400, 240, 50, "Hechizos antiguos");
  } else if (estadoActual === 'Rar1') {
    dibujarTexto(textos[2][4], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Rar2') {
    dibujarTexto(textos[2][5], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Twi5') {
    dibujarTexto(textos[2][6], 20, 15, 600, 330);
    botoncito(80, 400, 200, 50, 'No llega a tiempo');
    botoncito(340, 400, 240, 50, "Ella logra conseguirlos");
  } else if (estadoActual === 'TwiBD1') {
    dibujarTexto(textos[2][7], 20, 300, 600, 160);
    botoncito(80, 400, 220, 50, 'Sigue intentandolo');
    botoncito(340, 380, 220, 70, "El cansancio se\napodera de Starlight");
  } else if (estadoActual === 'TwiBD2') {
    dibujarTexto(textos[2][8], 20, 20, 600, 140);
    botoncito(220, 400, 200, 50, "Volver al menu");
  } else if (estadoActual === 'TwiTE1') {
    dibujarTexto(textos[2][9], 20, 290, 600, 180);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'TwiTE2') {
    dibujarTexto(textos[2][10], 20, 75, 600, 340);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'TwiTE3') {
    dibujarTexto(textos[2][11], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'FinalTwi') {
    dibujarTexto(textos[2][12], 20, 20, 600, 100);
    botoncito(220, 400, 200, 50, "Volver al menu");
  }
}

function mouseTwiPath() {
  let esContinuar = overMouse(520, 20, flecha.width, flecha.height);
  if (esContinuar) {
    if (estadoActual === 'Twi1') estadoActual = 'Twi2';
    else if (estadoActual === 'Twi2') estadoActual = 'Twi3';
    else if (estadoActual === 'Twi3') estadoActual = 'Twi4';
    else if (estadoActual === 'Rar1') estadoActual = 'Rar2';
    else if (estadoActual === 'Rar2') {
      estadoActual = 'Twi5';
      ambiente.stop();
      isAmbientePlaying = false;
      magia.play();
      tension.loop();
    }
    else if (estadoActual === 'TwiTE1') estadoActual = 'TwiTE2';
    else if (estadoActual === 'TwiTE2') estadoActual = 'TwiTE3';
    else if (estadoActual === 'TwiTE3') estadoActual = 'FinalTwi';
  } else if (estadoActual === 'Twi4') {
    if (overMouse(80, 400, 200, 50)) estadoActual = 'Rar1';
    if (overMouse(340, 400, 240, 50)) {
      estadoActual = 'Twi5';
      ambiente.stop();
      isAmbientePlaying = false;
      magia.play();
      tension.loop();
    }
  } else if (estadoActual === 'Twi5') {
    if (overMouse(80, 400, 200, 50)) estadoActual = 'TwiBD1';
    if (overMouse(340, 400, 240, 50)) estadoActual = 'TwiTE1';
  } else if (estadoActual === 'TwiBD1') {
    if (overMouse(80, 400, 220, 50)) estadoActual = 'TwiTE1';
    if (overMouse(340, 380, 220, 70)) estadoActual = 'TwiBD2';
  } else if (estadoActual === 'TwiBD2' || estadoActual === 'FinalTwi') {
    if (overMouse(220, 400, 200, 50)) {
      estadoActual = 'pan1';
      tension.stop();
    }
  }
}

//atajos
function keyPressed() {
  if (key === 'q' || key === 'Q') {
    estadoActual = 'Trixie5';
  }
  if (key === 'o' || key === 'o') {
    estadoActual = 'Twi5';
  }
  if (key === 'T' || key === 't') {
    estadoActual = 'Mains1';
  }
}