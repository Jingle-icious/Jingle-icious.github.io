console.log("Hellow, World!");
let btn = document.querySelector("#button");
//console.log(btn);

function changeBtn() {
    console.log("You Done CLicked");
    btn.textContent = "YOU CLICKED";
    btn.style.backgroundColor = "darkmagenta";
    btn.style.border = "2px solid magenta";
    btn.style.color = "white";
}


btn.addEventListener('click', changeBtn);


document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert ("I'M TIRED");
}

document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 100) + 1;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }