// grabs id from clickable button to add to new html via relative file path.
// didn't work in v1, look at v2
// $(".button-click").click(function() {
//     var id = $(this).attr("id");
//     window.location.pathname='./' + id + '.html';
// })

// v2
// alternative path finder

const simonButton = document.getElementById("simon");
const clickerButton = document.getElementById("clicker");

if (simonButton) {
    simonButton.addEventListener('click', () => {
        window.location.pathname = '/simon.html';
    });
}

if (clickerButton) {
    clickerButton.addEventListener('click', () => {
        window.location.pathname = '/clicker.html';
    });
}
