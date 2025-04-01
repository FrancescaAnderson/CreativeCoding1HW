function setup() {
  createCanvas(400, 400);
  background(220);
  
  // Draw face
  fill(255, 224, 189); // Skin color
  ellipse(200, 200, 150, 200);
  
  // Draw eyes
  fill(255); // White color for eyes
  ellipse(170, 180, 30, 20);
  ellipse(230, 180, 30, 20);
  
  // Draw pupils
  fill(101, 67, 33); // Brown color for pupils
  ellipse(170, 180, 15, 15);
  ellipse(230, 180, 15, 15);
  
  // Draw hair
  fill(101, 67, 33); // Brown color for hair
  arc(200, 160, 160, 200, PI, TWO_PI); // Top hair
  
  // Add hair to the sides, closer and lower to the face
  arc(145, 200, 40, 200, HALF_PI, PI + HALF_PI); // Left hair
  arc(255, 200, 40, 200, PI + HALF_PI, HALF_PI); // Right hair
  
  // Draw mouth
  fill(255, 105, 97); // Light red color for lips
  arc(200, 240, 50, 30, 0, PI);
  
  // Draw freckles
  fill(165, 42, 42); // Color for freckles
  // Left cheek
  for (let i = 0; i < 5; i++) {
    let x = random(140, 170);
    let y = random(190, 220);
    ellipse(x, y, 5, 5);
  }
  // Right cheek
  for (let i = 0; i < 5; i++) {
    let x = random(230, 260);
    let y = random(190, 220);
    ellipse(x, y, 5, 5);
  }
  
  // Draw nose
  fill(255, 224, 189); // Same skin color as face
  triangle(200, 190, 190, 220, 210, 220);
  
  // Draw a rectangle (e.g., as a shirt)
  fill(0, 0, 255); // Blue color for shirt
  rect(150, 300, 100, 50);
  
  // Draw a point
  stroke(0); // Black color for point
  point(200, 250);
  
  // Draw a line (e.g., as a neck)
  stroke(255, 224, 189); // Skin color for neck
  line(200, 250, 200, 300);
}

function draw() {
  fill(0); // Black color for text
  textSize(16); // Set text size
  
  // Title of the portrait
  text('Self Portrait', 10, 30);
  
  // Sign the portrait with name
  text('Francesca Anderson', width - 150, height - 10); 
}
