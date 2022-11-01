const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//const { innerWidth, innerHeight } = window;

canvas.width = innerWidth;
canvas.height = innerHeight;

class Circle {
  constructor(x, y, radius, dx, dy, fill) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.fill = fill;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = this.fill;
  }
  changeCourse() {
    this.draw();
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

function createCircles() {
  let arr = [];
  let col = [
    "blue",
    "red",
    "pink",
    "lightgreen",
    "black",
    "lightblue",
    "#f0f",
    "0ff",
  ];
  for (let i = 0; i < 100; i++) {
    let radius = Math.random() * 60;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    let fill = `rgb(${R}, ${G}, ${B})`;
    let alter = Math.floor(Math.random() * col.length);
    arr.push(new Circle(x, y, radius, dx, dy, col[alter]));
  }
  return arr;
}

let circles = createCircles();

function animateCircle() {
  requestAnimationFrame(animateCircle);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circles.length; i++) {
    circles[i].changeCourse();
  }
}

animateCircle();
