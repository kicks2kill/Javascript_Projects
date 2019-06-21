var canvas = document.querySelector('canvas');

var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

function random(min,max) {
    //return a random number in the range between the two
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function Ball(x,y,velX,velY,color,size) {
    this.x= x;
    this.y= y;
    this.velX= velX;
    this.velY= velY;
    this.color= color;
    this.size = size;
}

/**
 * beginPath() to state that we want to draw a shape on the paper
 * fillStyle to define the color
 * arc() to trace an arc shape on the paper based on the parameters
 *  - x and y position of the arc's center
 *  - radius of the arc, we are specifying our balls size prop
 *  - last two parameters specify the start and end # of degrees round the circle that the arc is drawn between
 *    0 degrees and (2 * PI) which is the equivalent of 360 degrees in radians. if we had done 1 * PI, you'd get a semi-circle
 */
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size, 0, 2 * Math.PI);
    ctx.fill();
}

/**
 * The first four parts of the function check whether the ball has reached the edge of the canvas.
 */
Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}


/**
 * For each ball, we need to check every other ball to se if it has collided with the current ball.
 * we immediately check whether the current ball being looped through is the same ball as the one we are currently check [we don't want to check whether a ball has collided with itself]
 * we then use a common algorithm to check the collision of two circle.
 * 
 */

Ball.prototype.collisionDetect = function() {
    for(var j = 0; j < balls.length; j++) {
        if(!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')';
            }
        }
    }
}

var balls = [];
/**
 * All programs that animate things generally involve an animation loop, which serves to update the information in the program and
 *  then render the resulting view on each frame of the animation; this is the basis for most games and other such programs. 
 */

while(balls.length < 25) {
    var size = random(10,20);
    var ball = new Ball(
        random(0 + size, width - size),
        random(0 + size,height - size),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
        size
    );
    balls.push(ball);
}
/**
 * Set the canvas fill color to semi-transparent black.
 * Use fillRect() to draw a rectangle of the color across the whole width/height of the canvas -> this serves to cover up the previous frames
 * drawing before the next one is drawn
 * loops through all the balls in the array and run each ball's draw() and update()
 * run method against the requestAnimationFrame() recursively to make a smooth animation+
 */

function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0,0,width,height);

    for(var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}