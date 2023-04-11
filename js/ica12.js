// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {

    constructor(x, y, velX, velY, color, size) {
       this.x = x;
       this.y = y;
       this.velX = velX;
       this.velY = velY;
       this.color = color;
       this.size = size;
    }
 
    draw() {
       ctx.beginPath();
       ctx.fillStyle = this.color;
       ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
       ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width) {
           this.velX = -(Math.abs(this.velX));
        }
  
        if ((this.x - this.size) <= 0) {
           this.velX = Math.abs(this.velX);
        }
  
        if ((this.y + this.size) >= height) {
           this.velY = -(Math.abs(this.velY));
        }
  
        if ((this.y - this.size) <= 0) {
           this.velY = Math.abs(this.velY);
        }
  
        this.x += this.velX;
        this.y += this.velY;
     }

     collisionDetect() {
        for (const ball of balls) {
           if (!(this === ball)) {
              const dx = this.x - ball.x;
              const dy = this.y - ball.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
  
              if (distance < this.size + ball.size) {
                ball.color = this.color = randomRGB();
              }
           }
        }
     }
  
  }

  const balls = [];

while (balls.length < 25) {
   const size = random(5,42);
   const ball = new Ball(
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

   balls.push(ball);
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0,  width, height);
 
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
 
    requestAnimationFrame(loop);
 }
 
 loop();

 //DVD stuff (That i did copy but i thought it was funny)
 
 let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
const speed = 2;
const pallete = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];
let dvd = document.getElementById("dvd");
dvd.style.backgroundColor = pallete[0];
let prevColorChoiceIndex = 0;
let black = document.getElementById("black");
const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;

function getNewRandomColor() {
  const currentPallete = [...pallete]
  currentPallete.splice(prevColorChoiceIndex,1)
  const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
  prevColorChoiceIndex = colorChoiceIndex<prevColorChoiceIndex?colorChoiceIndex:colorChoiceIndex+1;
  const colorChoice = currentPallete[colorChoiceIndex];
  return colorChoice;
}
function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + dvdHeight >= screenHeight || y < 0) {
    dirY *= -1;
    dvd.style.backgroundColor = getNewRandomColor();
  }
  if (x + dvdWidth >= screenWidth || x < 0) {
    dirX *= -1;

    dvd.style.backgroundColor = getNewRandomColor();
  }
  x += dirX * speed;
  y += dirY * speed;
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);