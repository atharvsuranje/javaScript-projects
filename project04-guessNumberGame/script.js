let randomNumber= parseInt(Math.random()*100 +1)

const submit=document.getElementById("subt")
const userInput = document.getElementById("guessField")
const guessSlot = document.getElementsByClassName("guesses")[0];
const remaining = document.getElementsByClassName("remaining")[0]
const lowOrHi = document.getElementsByClassName("lowOrHi")[0]
const startOver = document.getElementsByClassName("resultParas")[0]

const p=document.createElement('p')

let prevGuess= [];
let numGuess =0;
let playGame =true;

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)        
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("PLease enter a valid number")
    }
    else if(guess<1){
        alert("PLease enter a number greater than 1")
    }
    else if(guess>100){
        alert("PLease enter a number less than 100")
    }
    else{
        prevGuess.push(guess)
        numGuess++
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess< randomNumber){
        displayMessage(`Number is low`);
    } 
    else if (guess > randomNumber) {
        displayMessage(`Number is High`);
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML += `${guess}, `
    // numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    const newGameButton = document.getElementById("newGame")
    newGameButton.addEventListener('click',function(e) {
        randomNumber=parseInt(Math.random()*100 +1)
        prevGuess=[]
        numGuess=0;
        guessSlot.innerHTML=''
        remaining.innerHTML=`${10 - numGuess}`
        lowOrHi.innerHTML=''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true;
    })
}