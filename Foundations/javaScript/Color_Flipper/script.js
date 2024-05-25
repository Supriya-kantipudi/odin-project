console.log("In");
let e = document.querySelector("button");
e.addEventListener("click",function(){
    
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    let target = document.querySelector("body");
    target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    console.log("button clicked");
});