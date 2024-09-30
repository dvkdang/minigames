const btn = document.querySelector("button");
const box = document.getElementById("circle");
const height = document.documentElement.clientHeight*0.4;
const width = document.documentElement.clientWidth*0.4;

var score = 0;
var totalScore = 0;
var countDown = setInterval(timer, 1000);
let timeLeft = 10;

btn.addEventListener("click", function() {
    document.location.reload();
})

$("#circle").click(function() {
    randomcoords();
    clickAudio();
    scoreTrack();
});

// generates random coords and moves circle accordingly
function randomcoords() {
    let randXup = Math.floor((Math.random() * width) + 1);
    let randYdown = Math.floor((Math.random() * height) + 1);
    let randXdown = randXup*-1;
    let randYup = randYdown*-1;
    
    let randomNumberX = Math.floor((Math.random() * 2));
    let randomNumberY = Math.floor((Math.random() * 2));
    //0 is down, 1 is up

    if (randomNumberX === 0 && randomNumberY === 0) {
        box.style.transform = `translate(${randXdown}px, ${randYdown}px)`;
    } else if (randomNumberX === 1 && randomNumberY === 0) {
        box.style.transform = `translate(${randXup}px, ${randYdown}px)`;
    } else if (randomNumberX === 0 && randomNumberY === 1) {
        box.style.transform = `translate(${randXdown}px, ${randYup}px)`;
    } else {
        box.style.transform = `translate(${randXup}px, ${randYup}px)`;
    }
};

// generates audio
function clickAudio() {
    var audio = new Audio('assets/sounds/click.mp3');
    audio.play();
};

// score ++ when circle clicked + updates itself for every click.
// doesn't increase the score when timeLeft = 0
function scoreTrack() {

    if (timeLeft != 0) {
        score++;
    $("#score").text("Score: " + score);
    } else {
        score = score;
    }
}

// reset the game by pressing the key "r"
document.addEventListener("keydown", function(event) {
    keyPresser(event.key)
});

function keyPresser(key) {

    switch (key) {
        case "r":
            document.location.reload();
            break; 
        }};

// timer - countdown
function timer() {

    timeLeft--;
    $("#timer").text("Time: " + timeLeft)
    if (timeLeft === 0) {
        gameOver();
    }
}

// game over - stops countdown - presents final score
function gameOver() {
    clearInterval(countDown)

    $("#timer").text(`Time up!`)
    $("#score").text(`Your Final Score: ${score}`)
}
