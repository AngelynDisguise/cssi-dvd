/* global createCanvas background image loadImage windowWidth windowHeight width height*/

let dvdImage, imageX, xVelocity, imageY, yVelocity;
const globalVelocity = 4;
imageWidth = 200;
imageHeight = 150;

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
  image(dvdImage, imageX, imageY, imageWidth, imageHeight);

  imageX += xVelocity;
  imageY += yVelocity;

// Horizontal collision
  if (imageX > width - imageWidth) {
    xVelocity = -globalVelocity;
    imageX = width - imageWidth;
  } else if (imageX < 0) {
    xVelocity = globalVelocity;
    imageX = 0;
    
  }
  
  // Vertical collision
  if (imageY > height - imageHeight) {
    yVelocity = -globalVelocity;
    imageY = height - imageHeight;
  } else if (imageY < 0) {
    yVelocity = globalVelocity;
    imageY = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
