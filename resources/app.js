const chooseO2 = document.getElementById('chooseO2')
const chooseO = document.getElementById('chooseO')
const chooseX2 = document.getElementById('chooseX2')
const chooseX = document.getElementById('chooseX')
const playGameBtn = document.getElementById('playGameBtn')
const playVcpu = document.getElementById('playText1')
const playVplay = document.getElementById('playText2')
const container1 = document.getElementById('container')
const container2 = document.getElementById('container2')

chooseO2.addEventListener('click', e => {
    chooseO.style.display = 'block'
    chooseO2.style.display = 'none'

    chooseX.style.display = 'block'
    chooseX2.style.display = 'none'
})

chooseX.addEventListener('click', e => {
    chooseO.style.display = 'none'
    chooseO2.style.display = 'block'

    chooseX.style.display = 'none'
    chooseX2.style.display = 'block'
})

playVcpu.addEventListener('click', e => {
    container1.style.display = 'none'
    container2.style.display = 'block'
})

playVplay.addEventListener('click', e => {
    container1.style.display = 'none'
    container2.style.display = 'block'
    game()
})


///////////////////////////////////////////////////////////////////////////////////////
const cells = document.querySelectorAll('.cell')
const restartbtn = document.getElementById('restart')
const turnX = document.getElementById('turnX')
const turnO = document.getElementById('turnO')
const card = document.getElementById('card1')

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"
let playerScore = 0
let tieScore = 0
let CPUScore = 0

let running = false;


function game() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    restartbtn.addEventListener('click', restartGame);
    running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(board[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex)
    changePlayer()
    checkWinner()
}

function updateCell(cell, index){
    board[index] = currentPlayer;
    cell.innerHTML = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    if(currentPlayer === 'O'){
        turnX.style.display = 'none'
        turnO.style.display = 'block'
        

    } else if(currentPlayer === 'X'){
        turnX.style.display = 'block'
        turnO.style.display = 'none'
        
    }
   
}

function checkWinner(){
    let roundWon = false;

    for(i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = board(condition[0]);
        const cellB = board(condition[1]);
        const cellC = board(condition[2]);
       
       

        if(cellA == "" || cellB == "" || cellC == "" ){
            continue;
        }   
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        } 
    }

    if(roundWon){
        card.style.display = 'flex'
        running = false;
    }
   
}

function restartGame(){

}

