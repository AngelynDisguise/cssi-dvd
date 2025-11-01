/* global createCanvas background image loadImage windowWidth windowHeight width height*/

let dvdImage, imageX, xVelocity, imageY, yVelocity;
let globalVelocity = 2;

const imageWidth = 200;
const imageHeight = 150;

let velocitySlider;
let speedDisplay;

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
  
  setupSlider();
}

function setupSlider() {
  velocitySlider = document.getElementById('velocitySlider');
  speedDisplay = document.getElementById('speedDisplay');
  
  globalVelocity = parseFloat(velocitySlider.value);
  speedDisplay.innerText = globalVelocity;
  xVelocity = globalVelocity;
  yVelocity = globalVelocity;
  
  // Update velocity
  velocitySlider.addEventListener('input', (e) => {
    const newSpeed = parseFloat(e.target.value);
    globalVelocity = newSpeed;
    speedDisplay.innerText = newSpeed;

    // Math.sign() returns 1 or -1 based on the number sign
    xVelocity = Math.sign(xVelocity) * newSpeed;
    yVelocity = Math.sign(yVelocity) * newSpeed;
  });
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
