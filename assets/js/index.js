//grabs id from clickable button to add to new html via relative file path.
//v3 - should work hopefully
$(".button-click").click(function() {
    var id = $(this).attr("id");
    window.location.pathname='minigames/' + id + '.html';
})

// v2
// alternative path finder (didn't work)

// const simonButton = document.getElementById("simon");
// const clickerButton = document.getElementById("clicker");

// if (simonButton) {
//     simonButton.addEventListener('click', () => {
//         window.location.pathname = '/simon.html';
//     });
// }

// if (clickerButton) {
//     clickerButton.addEventListener('click', () => {
//         window.location.pathname = '/clicker.html';
//     });
// }
