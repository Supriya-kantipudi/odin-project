const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');

let currentScore,activePlayer,playinggame,scores;


let init = function(){
    score0El.textContent= 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;

    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playinggame = true;
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player0El.classList.remove('player--active');

    player0El.classList.add('player--active');

}
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    
    
}

btnroll.addEventListener("click",function(){
    //Generate the dice
    if(playinggame){
    const dice = Math.floor(Math.random()*6)+1;

    //Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //checked if rolled dice is 1
    if(dice != 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore + scores[activePlayer];
    }else{
       switchPlayer();
    }
}


})
btnhold.addEventListener("click",function(){
    if(playinggame){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
        playinggame = false;
        document.querySelector(`.player-${activePlayer}`).classList.add('player--winner');
        diceEl.classList.add('hidden');
    }
    else{
        switchPlayer();
    }
}
    
})

btnNew.addEventListener("click",init);
    
