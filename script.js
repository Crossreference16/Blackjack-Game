let cards = [] //this is an Array (aka an ordered list of items). Commas seperate list items, but there shouldnt be a comma after the last item. Arrays are zero indexed, so the first item will be numbered 0 and the second item will be number 1 and so on.
let sum = 0
let hasBlackJack = false
let itsAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")         // use # since I have used sum-el as an id attribute. //Alternatively, for a class attribute, use a fullstop (e.g let sumEl = document.querySelector(".sum-el") instead of #sumEL). These are CSS Selectors. //I could also use let sumEl = document.querySelector("body") instead of .sum-el or #sum-el. 
let cardsEL = document.querySelector("#cards-el")

 console.log(cards)

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1 // Math.random() creats a random number from 0-1. Math.floor removes the decimals, creating a rounded number.
    if (randomNumber > 10){
        return 10}
    else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}                                              

function startGame() {
    itsAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEL.textContent = "Your Cards: "
     for (i = 0; i < cards.length; i ++){
        cardsEL.textContent += cards[i] + " "
     }                                      //cards[0] and cards[1] were changed into a for loop.
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
    message = "Do you want to draw another card?"
} else if (sum === 21) {
    message = "NICE! You have Blackjack!"
    hasBlackJack = true
} else { 
    message = "BUST! You're out of the game!"
    itsAlive = false
}
messageEl.textContent = message
}   

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}


//Cash out!!

// Use console.log(hasBlackJack) to show if user has blackjack
// Use console.log(itsAlive) to show if user is bust or not

//notes about ARRAYS are below:
// Array - ordered list of items - coposite / complex data type
// Arrays are different to the three primitive data types i have learned: string (e.g names), numbers (e.g age), and booleans (whether you like pizza which is either true or false)
// use console.log(cards.length) to see the length of the array (how many items it has)

// To ADD items to an array, use card.push(), which pushes an item to an array. (e.g card.push(4)). Use console.log(cards) to see the array of numbers that cards holds.

//To REMOVE items from an array there are MULTIPLE ways:
//Pop will remove item from the end of the array. e.g cards.pop()
//Shift will remove item from the beginning of the array. e.g cards.shift()
//Splice will remove item from a specific index of an array. e.g cards.splice()
//filter will programmatically remove elements from an array.

// below is the code to allow autoplay audio on chrome:
function playAudio(){
    document.getElementById('audio1')
}
//

function resetGame() {
    sumEl.textContent = "Sum: 0"
    cardsEL.textContent = "Your Cards: None"
}