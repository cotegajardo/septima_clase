var url = 'https://api.myjson.com/bins/12e955';

function setup() {
   loadJSON(url, gotData, 'json');
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noStroke();
   noLoop();
}

function gotData(data) {
   console.log(data);
   var nombre = data.fruits[2];
   text("Mi fruta (que no parece fruta) favorita es le " + nombre + ".", width / 2, 150);
}

function draw() {
   background(255,16,0);
   fill(255);
   textSize(20);
   textAlign(CENTER);
}
