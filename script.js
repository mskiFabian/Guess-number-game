const secretNumber = Math.floor (Math.random() * 20 ) + 1
let score = 20
let highscore = 0

// message textContent
const displayMessage = function(message) {
    document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value)  
    console.log(guess, typeof guess)

    // when there is falsy statement
    if(!guess) {
        displayMessage("Not a number!")
        // document.querySelector(".message").textContent = "Not a number!"

    // when the player win
    } else if(guess === secretNumber) {
        // document.querySelector(".message").textContent = "Correct number!"
        displayMessage("Correct number!")
        document.querySelector(".number").textContent = secretNumber
        

        document.querySelector("body").style.backgroundColor = " #60b347"
        document.querySelector(".number").style.width = "30rem"

        if(score > highscore) {
            highscore = score
            document.querySelector(".highscore").textContent = highscore
        }
    // when the guess is wrong    
    } else if(guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector(".message").textContent = guess > secretNumber ? "To high!" : "To low"
            displayMessage(guess > secretNumber ? "To high!" : "To low")
            score --
            document.querySelector(".score").textContent = score
    
            // when the score is 0, and player lose the game
        } else {
            // document.querySelector(".message").textContent = "You lost the game!" 
            displayMessage("You lost the game!")
            score --
            document.querySelector(".score").textContent = 0
        }
    }           
    // when the guess it to high    
    // } else if (guess > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector(".message").textContent = "To high!"
    //         score --
    //         document.querySelector(".score").textContent = score

    // // when the score is 0, and player lose the game
    //     } else {
    //         document.querySelector(".message").textContent = "You lost the game!"
    //         score --
    //         document.querySelector(".score").textContent = 0
    //     }
    
    // // when the playes guess is to low    
    // } else if (guess < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector(".message").textContent = "To low"
    //         score--
    //         document.querySelector(".score").textContent = score

    // // when the score is 0, and player lose the game
    //     } else {
    //         document.querySelector(".message").textContent = "You lost the game"
    //         score --
    //         document.querySelector(".score").textContent = 0
    //     }       
            
})


//reset game function
document.querySelector(".again").addEventListener("click", function() {
    // document.querySelector(".message").textContent = "Start guessing..."
    score = 20
    displayMessage("Start guessing ...")
    document.querySelector(".score").textContent = score 
    document.querySelector(".guess").value = ""
    document.querySelector(".number").textContent = "?"

    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"
})
