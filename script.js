let firstCard = 10
let secondCard = 8
let cards = [firstCard, secondCard] //this is an Array (aka an ordered list of items). Commas seperate list items, but there shouldnt be a comma after the last item. Arrays are zero indexed, so the first item will be numbered 0 and the second item will be number 1 and so on.
let sum = firstCard + secondCard
let hasBlackJack = false
let itsAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")            // use # since I have used sum-el as an id attribute. //Alternatively, for a class attribute, use a fullstop (e.g let sumEl = document.querySelector(".sum-el") instead of #sumEL). These are CSS Selectors. //I could also use let sumEl = document.querySelector("body") instead of .sum-el or #sum-el. 
let cardsEL = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame(){
    cardsEL.textContent = "Cards: " + cards[0]+ " and " + cards[1] //firstCard and secondCard were changed to cards[0] and cards[1], which are arrays.
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
    let card = 3
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
