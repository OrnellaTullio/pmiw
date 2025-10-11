// Se declara una variable para cada imagen
let sec1;
let sec2;
let secTrixie1;
let secTrixie2 ;
let secTrixie3;
let secTrixie4;
let secTrixie5;
let secCañon;
let secPubl;
let secQuime;
let secTp;
let FinalTrixie;
let biblioteca;
let txtTwi;
let txtInicio ;
let flecha;
let fleActiva;
let txtTrixie;
let estadoActual = 'pan1';
// 1. CARGA DE RECURSOS
function preload() {
  // Cargamos cada imagen en su propia variable
  fleActiva = loadImage('data/FlechaAct.png');
  flecha = loadImage('data/flechaInac.png');
  sec1= loadImage('data/PANTALLA1.png');
  sec2 = loadImage('data/PANTALLA2.png');
  secTrixie1 = loadImage('data/PANTALLA3.png');
  secTrixie2 = loadImage('data/PANTALLA4.png');
  secTrixie3 = loadImage('data/PANTALLA5.png');
  secTrixie4  = loadImage('data/twi_habla_con_Star.png');
  secCañon= loadImage('data/Cañon.png');
  secPubl = loadImage('data/publico.png');
  secQuime = loadImage('data/quimera.png');
  secTp = loadImage('data/GE1.png');
  FinalTrixie  = loadImage('data/GE2.png');
  biblioteca = loadImage('data/biblioteca.jpg');
  txtInicio = loadStrings ('data/diaInicio.txt');
  txtTrixie = loadStrings ('data/txtTrixie.txt');
  txtTwi = loadStrings ('data/txtTwi.txt');
}

// 2. CONFIGURACIÓN INICIAL
function setup() {
  createCanvas(640, 480);
  textSize(22);
  textFont('Georgia');
}

// 3. BUCLE PRINCIPAL DE DIBUJO
function draw() {
  if (estadoActual === 'pan1') {
    // Usamos la variable de imagen directamente
    image(sec1, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, height/6 , width - 40, 320, 10);
    fill(255);
    text(txtInicio[0],100, height/4 , 480);
    botonparacontinuar (520, 20);

  } else if (estadoActual === 'pan2') {
    image(sec2, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtInicio[1], 40, 330, width - 80);
botonparacontinuar (520, 20);
   
     } else if (estadoActual === 'pan3') {
    image(sec2, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtInicio[2], 40, 340, width - 80);
botonparacontinuar (520, 20);
   

  } else if (estadoActual === 'pan4') {
    image(sec2, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtInicio[3], 40, 340, width - 80);

    botoncito(80, 400, 190, 50, "ir al spa");
    botoncito(340, 400, 240, 50, "Adelantar las lecciones");

  } else if (estadoActual === 'Trixie1') {
    image(secTrixie1, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtTrixie[0],40, 380, width - 80);
    botonparacontinuar (520, 20);

    } else if (estadoActual === 'Trixie2') {
    image(secTrixie1, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtTrixie[1],40, 380, width - 80);
    botonparacontinuar (520, 20);

     } else if (estadoActual === 'Trixie3') {
    image(secTrixie2, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtTrixie[2],40, 380, width - 80);
    botonparacontinuar (520, 20);

     } else if (estadoActual === 'Trixie4') {
    image(secTrixie2, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtTrixie[3],40, 380, width - 80);
    botonparacontinuar (520, 20);

    } else if (estadoActual === 'Trixie5') {
    image(secTrixie2, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 270, width - 40, 200, 10);
    fill(255);
    text(txtTrixie[4],40, 370, width - 80);
    botonparacontinuar (520, 20);

    } else if (estadoActual === 'Trixie6') {
    image(secTrixie3, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtTrixie[5],40, 380, width - 80);
    botonparacontinuar (520, 20);

    } else if (estadoActual === 'Trixie7') {
    image(secTrixie3, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 270, width - 40, 200, 10);
    fill(255);
    text(txtTrixie[6],40, 370, width - 80);
    botonparacontinuar (520, 20);

    } else if (estadoActual === 'Trixie8') {
    image(secTrixie3, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 270, width - 40, 200, 10);
    fill(255);
    text(txtTrixie[7],40, 370, width - 80);
    botonparacontinuar (520, 20);

 } else if (estadoActual === 'Trixie9') {
    image(secTrixie4, 0, 0, width, height);
    stroke(10)
    fill(0, 0, 0, 150);
    rect(20, 15, width - 40, 210, 10);
    fill(255);
    text(txtTrixie[9],40, 120, width - 80);

    botoncito(80, 400, 220, 50, 'Si');
    botoncito(340, 400, 220, 50, "No");

} else if (estadoActual === 'Trixie10') {
    image(secCañon, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 270, width - 40, 200, 10);
    fill(255);
    text(txtTrixie[10],40, 370, width - 80);
    botonparacontinuar (520, 20);

} else if (estadoActual === 'Trixie11') {
    image(secCañon, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 270, width - 40, 200, 10);
    fill(255);
    text(txtTrixie[10],40, 370, width - 80);
    botonparacontinuar (520, 20);

    } else if (estadoActual === 'Trixie12') {
    image(secQuime, 0, 0, width, height);
    botonparacontinuar (520, 20);

    } else if (estadoActual === 'Trixie13') {
    image(secQuime, 0, 0, width, height);
    botonparacontinuar (520, 20);

     } else if (estadoActual === 'Trixie14') {
    image(secPubl, 0, 0, width, height);
    botonparacontinuar (520, 20);

    } else if (estadoActual === 'Trixie15') {
    image(secPubl, 0, 0, width, height);
     botoncito (220, 400,200,50,"Volver al menu")

     } else if (estadoActual === 'Trixie16') {
    image(secTp, 0, 0, width, height);
    botonparacontinuar (520, 20);

     } else if (estadoActual === 'Trixie17') {
    image(FinalTrixie, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 20, width - 40, 100, 10);
    fill(255);
    text(txtTrixie[11],40, 70, width - 80);
    botoncito (220, 400,200,50,"Volver al menu")
   

  } else if (estadoActual === 'Mains1') {
    // Reutilizamos la imagen de inicio para este final
    image(sec2, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 200, width - 40, 100, 10);
    fill(255);
    text("¡Debería de pedirle ayuda a mis amigas!\nEllas sabrán como ayudarme. Hm...\n¿pero a cuales les pido ayuda?", width / 2, 250);
botoncito(40, 390, 150, 60, "Twilight y\nRarity");
    botoncito(240, 390, 150, 60, "Pinkie Pie y\nFluttershy");
botoncito (440, 390, 150, 60,"Rainbow y\nApplejack")
  }

else if (estadoActual === 'Twi1') {
    image(biblioteca, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtTwi[1], 40, 380, width - 80);
botonparacontinuar (520, 20);
}
else if (estadoActual === 'Twi2') {
    image(biblioteca, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtTwi[2], 40, 380, width - 80);
botonparacontinuar (520, 20);
}
else if (estadoActual === 'Twi3') {
    image(biblioteca, 0, 0, width, height);
    fill(0, 0, 0, 150);
    rect(20, 300, width - 40, 160, 10);
    fill(255);
    text(txtTwi[3], 40, 380, width - 80);
botonparacontinuar (520, 20);
}
}

// 4. MANEJO DE INTERACCIONES
function mousePressed() {
  if (estadoActual === 'pan1') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'pan2';
    }
  } else if (estadoActual === 'pan2') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'pan3';
    }
    } else if (estadoActual === 'pan3') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'pan4';
    }
  } else if (estadoActual === 'pan4') {
    if (overMouse(80, 400, 190, 50)) {
      estadoActual = 'Trixie1';
    } else if (overMouse(340, 400, 240, 50)) {
      estadoActual = 'Mains1';
    }
  }else if (estadoActual === 'Mains1') {
    if (overMouse(40, 390, 150, 60)) {
      estadoActual = 'Twi1';
    } else if (overMouse(240, 390, 150, 60)) {
      estadoActual = 'Flutter1';
    } else if (overMouse(440, 390, 150, 60)) {
      estadoActual = 'Rainbow1'; 
    }
  } else if (estadoActual === 'Trixie1') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie2';
    }
}else if (estadoActual === 'Trixie2') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie3';
    }
}else if (estadoActual === 'Trixie3') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie4';
    }
  }else if (estadoActual === 'Trixie4') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie5';
    }
  }else if (estadoActual === 'Trixie5') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie6';
    }
  } else if (estadoActual === 'Trixie6') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie7';
    }
  }  else if (estadoActual === 'Trixie7') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie8';
    }
  }  else if (estadoActual === 'Trixie8') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie9';
    }
  } else if (estadoActual === 'Trixie9') {
    if (overMouse(80, 400, 220, 50)) {
      estadoActual = 'Trixie10';
    } else if (overMouse(340, 400, 220, 50)) {
      estadoActual = 'Trixie11';
    }
}  else if (estadoActual === 'Trixie10') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie12';
    }
}else if (estadoActual === 'Trixie12') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie14';
    }
}else if (estadoActual === 'Trixie14') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie16';
    }
  }else if (estadoActual === 'Trixie16') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie17';
    }
  } else if (estadoActual === 'Trixie11') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie13';
    }
}  else if (estadoActual === 'Trixie13') {
    if (overMouse(520, 20, flecha.width, flecha.height)) {
      estadoActual = 'Trixie15';
    }
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
  textAlign(CENTER, CENTER);
  text(textoB, posX + tamX / 2, posY + tamY / 2);
}

function overMouse(posX, posY, tamX, tamY) {
  return mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY;
}
  function botonparacontinuar (posX, posY) {
       tamX = flecha.width;
     tamY = flecha.height;
  if (overMouse(posX, posY, tamX, tamY)) {
 image(fleActiva, posX, posY);
     } else {
          image(flecha, posX, posY);
         }
       }

function keypressed () {                                       
      if (key === 'q' || key === 'Q') {                                                                      
       estadoActual === 'Trixie5';                                                                                
   }                                                                                                       
 }                              

