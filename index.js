let homePoints = 0;
let guestpoints = 0;
let homeScore = document.getElementById("score-board-home");
let guestScore = document.getElementById("score-board-guest");

// HOME SCORE-BOARD
function increase1(){
    homePoints +=1;
    homeScore.textContent = homePoints;
}

function increase2(){
    homePoints +=2;
    homeScore.textContent = homePoints;
}

function increase3(){
    homePoints +=3;
    homeScore.textContent = homePoints;
}

// GUEST SCORE-BOARD
function add1(){
    guestpoints +=1;
    guestScore.textContent = guestpoints;
}

function add2(){
    guestpoints +=2;
    guestScore.textContent = guestpoints;
}

function add3(){
    guestpoints +=3;
    guestScore.textContent = guestpoints;
}