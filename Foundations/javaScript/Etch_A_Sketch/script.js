let color = document.querySelector('#colormode');
let rndColor = document.querySelector("#randomColor");
let eraser = document.querySelector("#Eraser");
let clr = document.querySelector("#clear");
let submitbtn = document.querySelector("#submit");
let custom = document.querySelector("#custom");
let container = document.querySelector(".container");
let clrbtn = document.querySelector("#colorbtn");

let currentMode = 'color';
let currentColor = 'black';
function setCurrentColor(color){
    console.log(color);
    currentColor = color;
}

function setCurrentMode(mode){
    currentMode = mode;
}

color.onchange = (e) => setCurrentColor(e.target.value);
clrbtn.addEventListener('click',() => {
    setCurrentMode("color");
})
eraser.addEventListener('click',()=>{
    setCurrentMode("erase");
})
rndColor.addEventListener('click',() => {
    setCurrentMode('random');
})



let val;
submitbtn.addEventListener("click",() => {
    val = custom.value;
    if(val <= 0){
        alert('Value cannot be less than 0');
        custom.value='';
    }
    else if(val > 100){
        alert('value cannot be greater than 100');
        custom.value = '';
    }
    else{
        grid(val);
    }
})
function grid(val){
    for(let i=0;i<val;i++){
        let rowDiv = document.createElement("div");
        rowDiv.classList.add('rowDiv');
        for(let j=0;j<val;j++){
         let squareDiv = document.createElement('div');
         squareDiv.classList.add('squareDiv');
         squareDiv.addEventListener('mouseenter',colorPicker);
         squareDiv.addEventListener('mouseover',colorPicker);
         rowDiv.appendChild(squareDiv);
        }
        container.appendChild(rowDiv);
    }
}

function colorPicker(e){
    if(currentMode == "random"){
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    else if(currentMode == "erase"){
        e.target.style.backgroundColor = '#ffffff';
    }
    else{
        e.target.style.backgroundColor = currentColor;
    }
}

clr.addEventListener('click',() =>{
    for(let i=0;i<val;i++){
        let curEle = document.querySelector('.rowDiv');
       curEle.remove();
    }
})