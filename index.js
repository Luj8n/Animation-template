let image;

function preload() {
  image = L.loadImage("./styles/assets/icon.png");
}

function setup() {
  L.createCanvas(800, 800);
}

function draw() {
  L.centerCanvas();
  L.background("black");
  L.Image(image, 0, 0, L.width, L.height);
}
