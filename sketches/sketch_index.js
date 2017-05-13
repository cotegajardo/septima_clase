function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 0.8);
  canvas.parent('top');
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
  var palabra = "comercializadisimo";
  var contador = 0;
  fill(13,72,82);
  background(205,219,221);
  textSize(50);
  for (var x = 0; x < palabra.length; x++) {
    contador++;
  }
  textAlign(CENTER);
  text(contador, width / 2, height / 2);
}
