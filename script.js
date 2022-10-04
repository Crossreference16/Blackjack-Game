let firstCard = 12
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let itsAlive = true
let message = ""


function startGame(){
    if (sum <= 20) {
    message = "Do you want to draw another card? 🙂"
} else if (sum === 21) {
    message = "Woohoo! You have Blackjack! 🥳"
    hasBlackJack = true
} else { 
    message = "You're out of the game! 😭"
    itsAlive = false
}
console.log(message)
}
    


//Cash out!!



// Use console.log(hasBlackJack) to show if user has blackjack
// Use console.log(itsAlive) to show if user is bust or not
