//Arrays//

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

// master function

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userChosenColour);

});

$(document).keypress(function() {

    $("#level-title").text("Level: 0");

    once();

    //call function once only, create a condition or function that allows this.
});

// once function (only works once)

function once() {

    let calledOnce = false;

    if (!calledOnce && gamePattern.length == 0) {
        calledOnce = true;
        nextSequence();
    } else {
        reset();
    }
}

// pushes new value to gamePattern
// resets userPattern to []
function nextSequence() {

    var randomNumber = Math.random()*4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
  // Game Pattern //
  //console.log("Game Pattern " + gamePattern);
  //  console.log("End of GamePattern: " + gamePattern.slice(-1)[0]);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    level++
    $("#level-title").text("Level: " + level);

    userClickedPattern = [];

};

// called on each click
// needs to verify that the last user entered color is correct
function checkAnswer() {
    const lastUserIndex = userClickedPattern.length - 1;
    const lastUserColor = userClickedPattern[lastUserIndex];
    const answerKey = gamePattern[lastUserIndex];
    const lastColorCorrect = lastUserColor === answerKey;

    if (!lastColorCorrect) {
        // abort game
        reset();
    }

    else if (userClickedPattern.length === gamePattern.length) {
        // go to next level
        setTimeout(function() {
             nextSequence()}, 1000);
    }

    }; 

//resets the game

function reset() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    playSound('wrong');
        $("body").addClass("game-over")
        setTimeout(function() {$("body").removeClass("game-over")}, 200);

    $("#level-title").text("Game Over! Press any key to restart")

}

// user clicks button and it creates a sound.

function playSound(name) {

        var audio = new Audio('assets/sounds/' + name + '.mp3');

        audio.play();

    };

// animates button to flash

function animatePress(currentColour) {

    $("#" + currentColour).addClass('pressed');

    setTimeout(function() {
        $("#" + currentColour).removeClass('pressed');
    }, 100)
};
    