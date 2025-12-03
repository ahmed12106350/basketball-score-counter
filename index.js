let homescore=0

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

function addOne(){
    homescore=homescore+1
    document.getElementById("guest-score").textContent=homescore
}

function addTwo(){
    homescore=homescore+2
    document.getElementById("guest-score").textContent=homescore
}

function addThree(){
    homescore=homescore+3
    document.getElementById("guest-score").textContent=homescore
}

function reset(){
    homescore=0
    document.getElementById("guest-score").textContent=homescore
}