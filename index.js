let homescore=0
let awayscore=0

function addOne(){
    homescore=homescore+1
    document.getElementById("home-score").textContent=homescore
}

function addTwo(){
    homescore=homescore+2
    document.getElementById("home-score").textContent=homescore
}

function addThree(){
    homescore=homescore+3
    document.getElementById("home-score").textContent=homescore
}

function reset(){
    homescore=0
    document.getElementById("home-score").textContent=homescore
}

function addOne1(){
    awayscore=awayscore+1
    document.getElementById("away-score").textContent=awayscore
}

function addTwo2(){
    awayscore=awayscore+2
    document.getElementById("away-score").textContent=awayscorescore
}

function addThree3(){
    awayscore=awayscore+3
    document.getElementById("away-score").textContent=awayscore
}

function reset2(){
    awayscore=0
    document.getElementById("away-score").textContent=awayscore
}