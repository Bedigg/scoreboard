let scoreHome = 0

let scoreGuest = 0

let timeoutHome=0

let timeoutGuest=0

let sumHome = document.getElementById("sum-home")

let sumGuest = document.getElementById("sum-guest")

let timeH= document.getElementById("timeout-home")

let timeG= document.getElementById("timeout-guest")

function oneHome() {
    scoreHome += 1
    sumHome.textContent = scoreHome
    
}

function twoHome() {
    scoreHome += 2
    sumHome.textContent = scoreHome
}

function threeHome() {
    scoreHome += 3
    sumHome.textContent = scoreHome
}

function oneGuest() {
    scoreGuest += 1
    sumGuest.textContent = scoreGuest
}

function twoGuest() {
    scoreGuest += 2
    sumGuest.textContent = scoreGuest
}

function threeGuest() {
    scoreGuest += 3
    sumGuest.textContent = scoreGuest
}

function newGame() {
    scoreHome = 0
    scoreGuest = 0
    sumHome.textContent = scoreHome
    sumGuest.textContent = scoreGuest
    timeoutHome=0;
    timeoutGuest=0;
    timeH.textContent=timeoutHome
    timeG.textContent=timeoutGuest
}

function timeoutH(){
    timeoutHome+=1
    timeH.textContent=timeoutHome
    
    if(timeoutHome>6){
        timeoutHome=0;
        timeH.textContent=timeoutHome
    }
    
}

function timeoutG(){
    timeoutGuest+=1
    timeG.textContent=timeoutGuest
    
    if(timeoutGuest>6){
        timeoutGuest=0;
        timeG.textContent=timeoutGuest
    }
}