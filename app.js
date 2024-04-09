/* 


//step 1: include readline module
const readline = require("readline")

//Step 2: Create an instance of readline.interface
const rl = readline.Interface({
    input: process.stdin,
    output: processstdout
})

//step 3: prompt the user for their name
rl.question("What is your name?", (name) => {
    //step 4: display a greeting
    console.log*(`Hello, ${name}!`)
    rl.close()
})
*/
//step 5 close the readline interface.



//Include the readline module for command line input
const readline = require('readline')

//Create an interface for the input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Function to generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min +1)) + min
}

//The secret numer to guess between 1 and 100
const secretNumber = getRandomInt(1, 100)

//Counter for number of attempts
let attempts = 0

console.log("Guess the number! It\'s between 1 and 100. you have unlimited attempts.")


//Create a function to start the game
function guessNumber() {
    rl.question('Enter your guess:', (answer) => {
        attempts += 1 //Increment the number of attempts
        const quess = parseInt(answer, 10) //Converting the input string to number
    //Check if the guess is correct
    if(guess === secretNumber) {
        console.log(`Correct! the number was ${secretNumber}. IT took you ${attempts} attempts`)
        rl.close()
    } else if (guess < secretNumber) {
        console.log('Too low!')
        guessNumber()
    } else if (guess > secretNumber) {
        console.log('Too high!')
        guessNumber()
    } else {
        console.log('Please enter a valid number')
        guessNumber
    }
    })
}

guessNumber()
