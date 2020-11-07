let image;

function preload() {
  image = L.loadImage("./libraries/L.js/icon.png");
}

function setup() {
  L.setCanvasSize(900, 900);
  L.centerCanvas();
}

function draw() {
  L.background("black");
  L.Image(image, 0, 0, L.width, L.height);
}
