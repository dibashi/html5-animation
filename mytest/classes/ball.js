
function Ball() {
    this.x = 0; 
    this.y = 0;
}

Ball.prototype.draw = function(ctx) {
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(this.x,this.y,10,50);
}