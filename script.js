// *DEFINE BUTTON AS VARIABLE*
// *DEFINE PLAYER AS VARIABLE*
// *DEFINE RANDOM NUMBER AS VARIABLE*
// *DEFINE DICE IMAGE AS VARIABLE*
// *DEFINE SCORE AS VARIABLE*
// *DEFINE CURRENT SCORE AS VARIABLE*

//create function for "roll" button click 

//when button is clicked, a random number (between 1-6) will be generated 

//if random number is 1 = change "player 1" text to "GAME OVER" = change "Roll" button to "play again?" button

//if random number doesn't equal 1 && score is less than 20 = change img to dice[2-6] = add random number to current score value, return new sum value

//if current value > 20 = change "player 1" text to "You Win!" = change "Roll" button to "Play again?" button

//if "play again?" button clicked, start the game from the beginning


const button = document.getElementById("btn");
const player = document.getElementById("player");
const score = document.getElementById("score");
const dice = document.getElementById("dice");


button.addEventListener("click", () => {
    if (button.innerHTML == "Play Again?") {
        button.innerHTML = "ROLL";
        player.innerHTML = "Player 1";
        score.innerHTML = 0;
    }

    let randNum = Math.round(Math.random() * 5) + 1;
    let currScore = parseInt(score.innerHTML);
    dice.src = `./images/dice${randNum}.png`;

    if (randNum === 1) {
        player.innerHTML = "You Lose!";
        button.innerHTML = "Play Again?";
    }
    else if (score.innerHTML < 20) {
        currScore += randNum;
        score.innerHTML = currScore;
    }

    if (currScore >= 20) {
        player.innerHTML = "You Win!";
        button.innerHTML = "Play Again?";
    }

})
