// grabs id from clickable button to add to new html via relative file path.
$(".button-click").click(function() {
    var id = $(this).attr("id");
    window.location.pathname='./' + id + '.html';
})

// alternative path finder

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