/* global createCanvas background image loadImage windowWidth windowHeight width height*/

let dvdImage, imageX, xVelocity, imageY, yVelocity;
const globalVelocity = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // We only want to load the logo once.
  imageX = 0;
  imageY = 0;

  xVelocity = globalVelocity;
  yVelocity = globalVelocity;
  dvdImage = loadImage(
    "https://cdn.glitch.com/2c8c05ca-f0b5-426e-9d1a-07a2d87bd9f6%2Fdvd-video.jpeg?v=1594094901767"
  );
}

function draw() {
  background(220);
  // Draw the logo at the new position.
  image(dvdImage, imageX, imageY, 200, 150);

  imageX += globalVelocity;
  imageY += globalVelocity;

  if (imageX > width - 200) {
    xVelocity = -globalVelocity;
  } else if (imageX < 0) {
    xVelocity = globalVelocity;
  }
  if (imageY > height - 150) {
    yVelocity = -globalVelocity;
  } else if (imageY < 0) {
    yVelocity = globalVelocity;
  }
}
