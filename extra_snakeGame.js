let snake;
let target = [];
let opacity, score, level, keyC;
let size = 10;

function setup() {
  createCanvas(500, 540);
  snake = new classS();
  target = [random(width - size * 2), random(60, height - size * 2)];
  
  //variables for texts
  opacity = 255;
  score = 0;
  keyC = 0;
  level = 1;
}

function draw() {
  background(255);
  noFill();
  stroke(0);
  rect(0, 0, 500, 540);

  //target
  stroke(50);
  strokeWeight(1);
  ellipse(target[0], target[1], size);

  //starting message
  gameMessage(opacity, "Snake Game 500");
  opacity = opacity - 1;
  
  //status bar: easy mode
  if (level == 1) {
  statusBar("Easy");
  size = 50;
  } else if (level == 2) {
    statusBar("Normal");
    size = 30;
  } else if (level == 3) {
    statusBar("Hard");
    size = 3;
  } else if (level == 4) {
    statusBar("-");
    gameMessage(255, "END")
    frameRate(0);
  }

  snake.eat();
  snake.show(width / 2, height / 2);
  snake.posCheck();
  snake.die();

  if (keyC == 0) {
    snake.move(0, 0);
  } else if (keyC == 1) {
    snake.move(0, -1);
  } else if (keyC == 2) {
    snake.move(-1, 0);
  } else if (keyC == 3) {
    snake.move(0, 1);
  } else if (keyC == 4) {
    snake.move(1, 0);
  }

  if (score == 500) {
    level = level + 1;
    score = 0;
  }
}

function keyPressed() {
  if (key === 'e') {
    keyC = 1;
  } else if (key === 's') {
    keyC = 2;
  } else if (key === 'd') {
    keyC = 3;
  } else if (key === 'f') {
    keyC = 4;
  }
}

function gameMessage(a, content) {
  push();
  textSize(30);
  textAlign(CENTER);
  noFill();
  strokeWeight(1);
  stroke(0, a);
  text(content, width / 2, height / 2);
  pop();
}

function statusBar(level) {
  push();
  noStroke();
  fill(55);
  rect(0, 0, 500, 40);
  textSize(15);
  textAlign(CENTER);
  fill(255);
  text("Mode: " + level, 60, 25);
  text("- ESDF controller -", width / 2, 25);
  text("score: " + score, 425, 25);
  pop();
}

class classS {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    // this.body = [];
    // this.body[0] = [this.x, this.y];
  }
  
  move(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
  }
  
  show() {
    noStroke();
    fill(0);
    ellipse(this.x, this.y, size);
  }
  
  eat() {
    if (dist(target[0], target[1], this.x, this.y) < size) {
    console.log("yum!");
    score = score + 100;
    return target[0] = random(width - size * 2), target[1] = random(60, height - size * 2);
    }
  }

  die() {
    push();
    noStroke();
    fill(0);
    textSize(20);
    if (this.x == size / 2) {
      text("lost", width / 2, height / 2);
      frameRate(0);
    } else if (this.x == width - size / 2) {
      text("lost", width / 2, height / 2);
      frameRate(0);
    } else if (this.y == 40 + size / 2) {
      text("lost", width / 2, height / 2);
      frameRate(0);
    } else if (this.y == height - size / 2) {
      text("lost", width / 2, height / 2);
      frameRate(0);
    }
    pop();
  }

  posCheck() {
    console.log(this.x);
    console.log(this.y);
  }
}