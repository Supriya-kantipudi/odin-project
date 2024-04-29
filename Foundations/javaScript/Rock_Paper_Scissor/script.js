function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    switch(num){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }

}
let us = 0;
let comp = 0;
function playRound(ComputerSelection,userSelection){
    let msg = document.querySelector('.result');
    if(ComputerSelection == "rock" && userSelection == "paper"){
        msg.innerText = "You win!rock beats paper"
        msg.style.backgroundColor = "green";
        us++;
    }
    else if(ComputerSelection == "paper" && userSelection == "scissor"){
        msg.innerText = "You win! Scissor beats Paper";
        msg.style.backgroundColor = "green";
        us++;
    }
    else if(ComputerSelection == "scissor" && userSelection == "rock"){
        msg.innerText = "You win! Rock beats Scissor";
        msg.style.backgroundColor = "green";
        us++;
    }
    else if(ComputerSelection == "scissor" && userSelection == "paper"){
        msg.innerText = "You Lose! Scissor beats Paper";
        msg.style.backgroundColor = "red";
        comp++;
    }
    else if(ComputerSelection == "paper" && userSelection == "rock"){
        msg.innerText = "You Lose! Paper beats Rock";
        msg.style.backgroundColor = "red";
        comp++;
    }
    else if(ComputerSelection == "rock" && userSelection == "scissor"){
        msg.innerText = "You Lose! Rock beats Scissor";
        msg.style.backgroundColor = "red";
        comp++;
    }
    else if(ComputerSelection == "rock" && userSelection == "rock"){
        msg.innerText = "Draw ! Rock n Rock";
        msg.style.backgroundColor = "yellow"
       
    }
    else if(ComputerSelection == "paper" && userSelection == "paper"){
        msg.innerText = "Draw ! Paper n Paer";
        msg.style.backgroundColor = "yellow";
        
    }
    else{
        msg.innerText = "Draw ! Scissor n Scissor";
        msg.style.backgroundColor = "yellow";
        
    }
    
}

let choices = document.querySelectorAll('.choice');
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute('id');
        let computerChoice = getComputerChoice();
        playRound(computerChoice,userChoice);
        let userScore = document.querySelector('.comp-score');
        let compScore = document.querySelector('.user-score');
        userScore.innerText= us;
        compScore.innerText = comp;
    });
});
let restart = document.querySelector('.restart');
restart.addEventListener("click",() => {
    us = 0;
    comp = 0;
    let userScore = document.querySelector('.comp-score');
    let compScore = document.querySelector('.user-score');
    userScore.innerText= us;
    compScore.innerText = comp;
    let msg = document.querySelector('.result');
    msg.innerText = "Lets play the Game";
    msg.style.backgroundColor = "green";

})
