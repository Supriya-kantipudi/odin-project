let ele = document.getElementsByTagName('ul');
ele[0].addEventListener("click",(e) => {
    let curr = e.target.id;
    switch(curr){
        case "submit": console.log("Submit button");
                        break;
        case "Home":  alert("You clicked the Home button");
                       break;
        case "About": alert("You clicked the About Button");
                       break;
    }
});