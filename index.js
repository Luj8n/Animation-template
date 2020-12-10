let image;

function preload() {
  image = L.loadImage("./styles/assets/icon.png");
}

function setup() {
  L.createCanvas(800, 800);
}

let iteration = 1;

function draw() {
  L.centerCanvas();
  L.background("#111111");
  L.translate(400, 400);
  let scale = L.map(Math.sin(L.degToRad(iteration)), -1, 1, 0.3, 1);
  L.scale(scale);
  L.rotate(L.degToRad(1));
  L.Image(image, -400, -400, L.width, L.height);
  L.resetScale();
  L.resetTranslation();
  iteration++;
}
