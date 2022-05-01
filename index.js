let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message=""
let messageEl =document.querySelector("#message-el");
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.querySelector("#cards-el")
let newButton=document.querySelector("new-button")
function startGame(){
    renderGame()
    
}
function renderGame(){
    cardsEl.textContent="Card : "+ firstCard +" "+secondCard
    sumEl.textContent="Sum: "+ sum 
    if (sum <= 20) {
        message="Do you want to draw a new card?"
    } else if (sum === 21) {
        message="You've got Blackjack!"
        hasBlackJack = true
    } else {
        message="You're out of the game!"
        isAlive = false
    }
    messageEl.textContent=message;
}

function newCard(){
    let card=6
    sum+=card;
    renderGame()
    cardsEl.textContent+=" " +card

}