let countElA=document.getElementById("count-el-A")
let countElB=document.getElementById("count-el-B")
//let resetEl=document.getElementById("reset-el")
let countA=0
let countB=0

function increment1A(){
    countA=countA+1
    countElA.textContent=countA
}
function increment3A(){
    countA=countA+3
    countElA.textContent=countA
}
function increment5A(){
    countA=countA+5
    countElA.textContent=countA
}

function increment1B(){
    countB=countB+1
    countElB.textContent=countB
}
function increment3B(){
    countB=countB+3
    countElB.textContent=countB
}
function increment5B(){
    countB=countB+5
    countElB.textContent=countB
}

function reset(){
    countElA.textContent=0
    countA=0
    countElB.textContent=0
    countB=0
}