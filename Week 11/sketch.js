// Variables for the player character
var playerX = 50;
var playerY = 50;
var playerSize = 20;

// Define key codes for movement
var upKey = 87; // W
var downKey = 83; // S
var leftKey = 65; // A
var rightKey = 68; // D

// Variables for moving obstacles
var obstacles = [];
var obstacleSpeeds = [];

// Variables for mouse-created obstacles
var mouseObstacleX;
var mouseObstacleY;

// Exit variables
var exitX = 450;
var exitY = 550;
var exitWidth = 50;
var exitHeight = 50;

// Game state
var gameWon = false;

function setup() {
    createCanvas(500, 600);

    // Initialize obstacles
    for (var i = 0; i < 3; i++) {
        obstacles.push({
            x: random(width),
            y: random(height),
            size: random(20, 40),
            color: color(random(255), random(255), random(255))
        });

        obstacleSpeeds.push({
            xSpeed: random(-4, 4),
            ySpeed: random(-4, 4)
        });
    }
}

function draw() {
    drawGradientBackground();

    // Draw borders and exit
    drawBorders(15);
    drawExit();

    // Draw player
    drawPlayer();
    movePlayer();

    // Draw and move obstacles
    drawObstacles();

    // Check win condition
    if (checkWinCondition()) {
        displayWinMessage();
    }

    // Draw mouse-created obstacle
    if (mouseObstacleX && mouseObstacleY) {
        fill(100, 200, 150);
        rect(mouseObstacleX, mouseObstacleY, 25, 25);
    }
}

function drawGradientBackground() {
    for (let y = 0; y < height; y++) {
        let gradientColor = lerpColor(color(255, 182, 193), color(135, 206, 250), y / height);
        stroke(gradientColor);
        line(0, y, width, y);
    }
}

function drawBorders(thickness) {
    fill(100, 100, 100);
    rect(0, 0, width, thickness); // Top border
    rect(0, 0, thickness, height); // Left border
    rect(0, height - thickness, width, thickness); // Bottom border
    rect(width - thickness, 0, thickness, height - 50); // Right border
}

function drawExit() {
    fill(50, 250, 100);
    rect(exitX, exitY, exitWidth, exitHeight);
}

function drawPlayer() {
    fill(23, 40, 123);
    circle(playerX, playerY, playerSize);
}

function movePlayer() {
    if (keyIsDown(upKey)) {
        playerY -= 5;
    }
    if (keyIsDown(downKey)) {
        playerY += 5;
    }
    if (keyIsDown(leftKey)) {
        playerX -= 5;
    }
    if (keyIsDown(rightKey)) {
        playerX += 5;
    }

    // Keep player within canvas
    playerX = constrain(playerX, 0, width);
    playerY = constrain(playerY, 0, height);
}

function drawObstacles() {
    for (var i = 0; i < obstacles.length; i++) {
        fill(obstacles[i].color);
        ellipse(obstacles[i].x, obstacles[i].y, obstacles[i].size);

        obstacles[i].x += obstacleSpeeds[i].xSpeed;
        obstacles[i].y += obstacleSpeeds[i].ySpeed;

        // Wrap obstacles around the canvas
        if (obstacles[i].x > width) obstacles[i].x = 0;
        if (obstacles[i].x < 0) obstacles[i].x = width;
        if (obstacles[i].y > height) obstacles[i].y = 0;
        if (obstacles[i].y < 0) obstacles[i].y = height;
    }
}

function checkWinCondition() {
    return (
        playerX > exitX &&
        playerX < exitX + exitWidth &&
        playerY > exitY &&
        playerY < exitY + exitHeight
    );
}

function displayWinMessage() {
    textSize(30);
    fill(0);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
    noLoop();
}

function mouseClicked() {
    mouseObstacleX = mouseX;
    mouseObstacleY = mouseY;
}
