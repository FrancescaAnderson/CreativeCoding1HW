var headX = 200, headY = 200, headSize = 150, headDirX = 1, headDirY = 1, headSizeDir = 1;
var eyeLX = 170, eyeLY = 180, eyeDirX = 2, eyeDirY = 1, eyeRX = 230, eyeRY = 180, eyeRDirX = 1, eyeRDirY = 2;
var titleSize = 16, titleSizeDir = 2, titleCount = 0, nameX = 10, nameY = 370, nameDirX = 1, nameDirY = 0;
var colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#EE82EE'], colorIndex = 0;

function setup() { createCanvas(400, 400); }

function draw() {
  background(220);
  // Draw face
  fill(colors[colorIndex]);
  ellipse(headX, headY, headSize, headSize * 1.33);
  headX += headDirX; headY += headDirY; headSize += headSizeDir;
  if (headX >= 325 || headX <= 75 || headY >= 300 || headY <= 100) { headDirX *= -1; headDirY *= -1; changeColor(); }
  if (headSize >= 200 || headSize <= 100) headSizeDir *= -1;

  // Draw eyes
  fill(255);
  ellipse(eyeLX, eyeLY, 30, 20); ellipse(eyeRX, eyeRY, 30, 20);
  eyeLX += eyeDirX; eyeLY += eyeDirY;
  if (eyeLX >= 200 || eyeLX <= 140 || eyeLY >= 220 || eyeLY <= 140) { eyeDirX *= -1; eyeDirY *= -1; }
  eyeRX += eyeRDirX; eyeRY += eyeRDirY;
  if (eyeRX >= 260 || eyeRX <= 200 || eyeRY >= 220 || eyeRY <= 140) { eyeRDirX *= -1; eyeRDirY *= -1; }

  // Draw pupils
  fill(101, 67, 33);
  ellipse(eyeLX, eyeLY, 15, 15); ellipse(eyeRX, eyeRY, 15, 15);

  // Draw hair
  fill(101, 67, 33);
  arc(headX, headY - 40, headSize + 10, headSize * 1.33 + 50, PI, TWO_PI);
  arc(headX - (headSize / 3), headY, 40, headSize * 1.33, HALF_PI, PI + HALF_PI);
  arc(headX + (headSize / 3), headY, 40, headSize * 1.33, PI + HALF_PI, HALF_PI);

  // Draw mouth
  fill(255, 105, 97);
  arc(headX, headY + 40, 50, 30, 0, PI);

  // Title of the portrait
  fill(0);
  textSize(titleSize);
  text('Self Portrait', 10, 30);
  titleSize += titleSizeDir; titleCount++;
  if (titleCount > 5) { titleSizeDir *= -1; titleCount = 0; }

  // Move name in square pattern
  text('Francesca Anderson', nameX, nameY);
  if (nameX >= 250 && nameY === 370) { nameDirX = 0; nameDirY = -1; }
  else if (nameX === 250 && nameY <= 30) { nameDirX = -1; nameDirY = 0; }
  else if (nameX <= 10 && nameY === 30) { nameDirX = 0; nameDirY = 1; }
  else if (nameX === 10 && nameY >= 370) { nameDirX = 1; nameDirY = 0; }
  nameX += nameDirX; nameY += nameDirY;
}

function changeColor() { colorIndex = (colorIndex + 1) % colors.length; }
