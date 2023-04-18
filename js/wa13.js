/*function check() {
    console.log('test');
}

function submit() {
    alert('Your Volume Is Now: ' + output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function minus() {
    if (outputInt > 0) {
    outputInt -=1;
    output.textContent = outputInt; }
    
}

function plus() {
    if (outputInt < 100) {
    outputInt +=1;
    output.textContent = outputInt;
    }
}

function random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }



const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');
button.addEventListener('click', updateOutput);
function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/


/* var slider = document.getElementById("myRange");
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output");


Update the current slider value (each time you drag the slider handle)
function update() {
  sliderOutput.textContent = slider.value;
} */

var canvas, context;
var volume = 0;
var r = 255; g = 0; b = 0;
var speaker = ["🔇", "🔈", "🔉", "🔊"];
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