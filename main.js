let canvas;
let currentColor = '#000000'; // Color inicial (negro)
let strokeWidth = 13; // Grosor inicial del trazo

function setup() {
  let canvasWidth = windowWidth * 0.8; // Ancho del canvas como el 80% del ancho de la ventana
  let canvasHeight = windowHeight * 0.6; // Alto del canvas como el 60% del alto de la ventana
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas-container'); // Coloca el canvas dentro del contenedor
  background(255); // Fondo blanco inicial del canvas
  let slider = select('#slider');
  slider.input(function() {
    strokeWidth = this.value();
  });
  let colorPicker = select('#colorPicker');
  colorPicker.changed(changeColor);
}

function clearCanvas() {
  background(255); // Limpia el canvas a blanco
}

function draw() {
  strokeWeight(strokeWidth);
  stroke(currentColor);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function changeColor() {
  currentColor = select('#colorPicker').value();
}
