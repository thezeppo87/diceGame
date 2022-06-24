const dice = document.getElementById ("dice")

const rollDice = document.getElementById("rollDice")

const tryAgain = document.getElementById ("tryAgain")

let winOrRetry = document.getElementById("winOrRetry")

let score = document.getElementById("score");

let start = 0

let target = 20

const endResult=() => {
    rollDice.display="none"
    tryAgain.style.display="block"
}

rollDice.addEventListener("click", () => {
    let roll = Math.ceil(Math.random() *6)
    dice.src = `dicepics/dice${roll}.jpg`
    start += roll;
    score.textContent = `Cumulative score: ${start}`
if(roll==1){ 
    winOrRetry.textContent="It's the number of death"
    start = 0
    endResult()
    rollDice.textContent= ""
    tryAgain.textContent= "You lost! Click to retry"
}else if
    (start >= target){
    winOrRetry.textContent="That's one high score, well done"
    endResult()
    start = 0
    rollDice.textContent= ""
    tryAgain.textContent= "You won! Click to retry"
    }
})

tryAgain.addEventListener ("click", () =>{
    window.location.reload()
})
