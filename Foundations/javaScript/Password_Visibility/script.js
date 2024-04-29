let icon = document.querySelector('#icon');
icon.addEventListener('click',function(e){
    let ele = document.querySelector('#pass');
    console.log("Event happend");
    let type = ele.getAttribute("type")  === "password" ? "text":"password";
    ele.setAttribute("type",type);
});
