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
