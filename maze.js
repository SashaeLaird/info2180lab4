var loser = null;
 
window.onload = function() {
    $("start").onclick = start;
    $("start").onmouseover = startHover;
    $("end").onmouseover = end;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = boundaryHandler;
    }
};
 
function startHover() {
    if(loser === null) {
        loser = false;
        $("status").textContent = "Find the end!";
    }
}
 
function start() {
    loser = false;
    $("status").textContent = "Find the end!";
    
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}


function end() {
    if(loser === false) {
        $("status").textContent = "Congratulation you won";
        loser = null;
    }
    alert("Congratulation you won");
}
 
function boundaryHandler() {
    if (loser === false) {
        loser = true;
        $("status").textContent = "You lose!";

        var boundaries = $$("div#maze div.boundary");
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addClassName("youlose");
        }

    }
}