// I took some code and edited it, now it's weirdly broken on certain browsers lol
var canvas, context;
var volume = 0;
var r = 255; g = 0; b = 0;
var x = 200;
var y = 50;

window.onload = function() {

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    canvas.onmousedown = function() {
        volume += 10;
    };
    
    window.setInterval(function() {
        context.clearRect(0, 0, 640, 480);
        
        if (volume > 0) {
            volume -= 0.1;
        }
        if (volume > 100) {
            volume = 100;
        }
        if (volume < 0) {
            volume = 0;
        }
        
        //bar
        r = 384 - Math.floor(volume / 100 * 384);
        g = Math.floor(volume / 100 * 512);
        
        if (r < 0) { r = 0; }
        if (r > 255) { r = 255; }
        if (g < 0) { g = 0; }
        if (g > 255) { g = 255; }
        
        context.fillStyle = "rgb(0,0,0)";
        context.fillRect(x, y, 50, 200);
        
        context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        context.fillRect(x, y - volume * 2 + 200, 50, volume * 2);
        
        //text
        var percent = Math.floor(volume);
        var textWidth = context.measureText("0").width;
        var digits = Math.floor(Math.log10(percent)) + 1;
        if (digits <= 0) {
            digits = 1;
        }
        var offsetx = textWidth * digits;
        
        context.fillStyle = "rgb(255,255,255)";
        context.fillText(percent, x + 40 - offsetx, y + 75);
        context.font = "24px Arial";
        context.textBaseline = "top";
        context.strokeStyle = "rgb(0,0,0)";
        context.strokeText(percent, x + 40 - offsetx, y + 75);
        
        //emoji
        if (volume > 66) {
            index = 3;
        }
        else if (volume > 33) {
            index = 2;
        }
        else if (volume > 0) {
            index = 1;
        }
        else {
            index = 0;
        }
        
        context.fillText(speaker[index], x + 10, y + 200);
        
    }, 1);

};


