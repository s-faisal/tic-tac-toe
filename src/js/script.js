var gameState = [
    "", "", "", 
    "", "", "", 
    "", "", ""
];

var playerAction = "X"

var gameStop = false

var remainingTries = gameState.length

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function validateWinning(){
    let gameResult = ""
    for(var i=0; i<winningConditions.length; i++){
        let counters = {X:0,O:0}
        let value = ""
        for(var j=0; j<winningConditions[i].length;j++){
            value = gameState[winningConditions[i][j]]
            if(value){
                counters[value]++
            }
        }
        if(counters.X==3 || counters.O==3){
            gameResult = "Player "+value+ " won the game."
            gameStop = true
            break;
        }
    }

    if(remainingTries==0 && gameResult==''){
        gameStop = true
        gameResult = "Game Draw!"
    }

    printStatus(gameResult)
}

function printStatus(result){    
    if(result){
        document.getElementById('status').innerHTML = result
    }
}

function clearStatus(){    
    document.getElementById('status').innerHTML = ""
}

function printError(result){    
    if(result){
        document.getElementById('error').innerHTML = result
    }
}

function clearError(){    
    document.getElementById('error').innerHTML = ""
}

function changePlayer(id){
    if(!gameStop){
        if(gameState[id]!==""){
            printError("Please choose another block or restart the game.")
        }else{
            clearStatus()
            clearError()
            gameState[id] = playerAction;
            document.getElementById(id).innerHTML = playerAction
            playerAction = playerAction==='X' ? "O" : "X";
            remainingTries--
            printStatus(playerAction+"'s turn.")
            validateWinning()
        }
    }else{
        printError("Please restart the game.")
    }
}

function restart(){    
    clearStatus()
    clearError()
    gameStop = false
    gameState = ["", "", "", "", "", "", "", "", ""];
    remainingTries = gameState.length
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}