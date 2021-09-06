let cards = [];
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');
let sum = 0;
let message = '';
// player object

let player = {
    name: 'Per',
    chips: 147
};
let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.name + ': $' + player.chips;
// get random card function
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if (randomNumber === 1){
        return 11;
    }else if (randomNumber >= 11){
        return 10;
    }else{
        return randomNumber ;
    }
}
//blackjack function
function startGame(){
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]; 
    sum = firstCard + secondCard;  
    renderGame();
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ' ';
    }
    if (sum <= 20){
        message = 'Do you want to draw a new card?';
    }else if (sum === 21){
        message = 'BlackJack';
        hasBlackJack = true;
    }else{
        message = 'Out of game';
        isAlive = false;
    }
    messageEl.textContent = message;  
}
// new card function
function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum +=card;
        cards.push(card);
        renderGame();
    }

}



