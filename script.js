var numberOfSquares = 6;
var color = generateRandomColor(numberOfSquares);
var squares = document.querySelectorAll(".square");
var one = document.querySelector("#one");
var display = document.querySelector("#display");
var h1 = document.querySelector("h1");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var pickedColor = pc(); 
one.textContent = pickedColor;

btn1.addEventListener("click",reset);
btn2.addEventListener("click",easy);
btn3.addEventListener("click",hard);

for (let index = 0; index < color.length; index++) {
    squares[index].style.background = color[index];
    squares[index].addEventListener("click",clickWork);
}

function clickWork() {
    var clickedColor =(this.style.background);
        if (clickedColor === pickedColor) {
            display.textContent = "CORRECT";
            changeColor(pickedColor);
            h1.style.background = pickedColor;
            btn1.textContent = "PLAY AGAIN ?";
        } else {
            this.style.background = "#232323";
            display.textContent = "TRY AGAIN!";
        }
}

function easy() {
    btn2.classList.add("selected");
    btn3.classList.remove("selected");
    numberOfSquares = 3;
    color = generateRandomColor(numberOfSquares);
    pickedColor = pc();
    one.textContent = pickedColor;
    for (let index = 0; index < color.length; index++) {
        squares[index].style.background = color[index];
    }
    for (let index = 3; index < squares.length; index++) {
        squares[index].style.display = "none";
    }
}

function hard() {
    btn3.classList.add("selected");
    btn2.classList.remove("selected");
    numberOfSquares = 6;
    color = generateRandomColor(numberOfSquares);
    pickedColor = pc();
    one.textContent = pickedColor;
    for (let index = 0; index < color.length; index++) {
        squares[index].style.display = "block";
        squares[index].style.background = color[index];
    }
}

function reset() {
    color = generateRandomColor(numberOfSquares);
    pickedColor = pc();
    one.textContent = pickedColor;
    display.textContent = "";
    btn1.textContent = "NEW COLORS"
    for (let index = 0; index < color.length; index++) {
        squares[index].style.background = color[index];
    }
    h1.style.background = "steelblue";
}



function changeColor(c) {
    for (let index = 0; index < color.length; index++) {
        squares[index].style.background = c;
        
    }
}

function pc() {
    var random = Math.floor(Math.random()*color.length);
    return color[random];
}
function generateRandomColor(num) {
    var arr=[];
    for (let index = 0; index < num; index++) {
        arr.push(generateRandom());    
    }
    return arr;
}
function generateRandom() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}