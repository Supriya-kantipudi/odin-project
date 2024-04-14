function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    switch(num){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }

}
function playRound(ComputerSelection,userSelection){
    if(ComputerSelection == "rock" && userSelection == "paper"){
        console.log("You win! Paper beats Rock");
        return "user";
    }
    else if(ComputerSelection == "paper" && userSelection == "scissor"){
        console.log("You win! Scissor beats Paper");
        return "user";
    }
    else if(ComputerSelection == "scissor" && userSelection == "rock"){
        console.log("You win! Rock beats Scissor");
        return "user";
    }
    else if(ComputerSelection == "scissor" && userSelection == "paper"){
        console.log("You Lose! Scissor beats Paper");
        return "computer";
    }
    else if(ComputerSelection == "paper" && userSelection == "rock"){
        console.log("You Lose! Paper beats Rock");
        return "computer";
    }
    else if(ComputerSelection == "rock" && userSelection == "scissor"){
        console.log("You Lose! Rock beats Scissor");
        return "computer";
    }
    else if(ComputerSelection == "rock" && userSelection == "rock"){
        console.log("Draw ! Rock n Rock");
        return "draw";
    }
    else if(ComputerSelection == "paper" && userSelection == "paer"){
        console.log("Draw ! Paper n Paer");
        return "draw";
    }
    else{
        console.log("Draw ! Scissor n Scissor");
        return "draw";
    }
    
}
let us = 0;
let comp = 0;
for(let i=0;i<5;i++){
    let Computer = getComputerChoice();
    let user = prompt("Play Rock Paper or Scissor");
    let userSelection = user.toLowerCase();
   
    let winner = playRound(Computer,userSelection);
    if(winner == "user"){
        us += 1;
    }
    else if(winner == "computer"){
        comp += 1;
    }
}
if(us>comp){
    console.log("You Won");
}
else if(comp > us){
    console.log("You Lose");
}
else{
    console.log("Draw");
}