let gameState = [
    "X", "X", "X", 
    "O", "", "X", 
    "O", "O", "O"
];

let playerAction = "X"

let remainingTries = gameState.length

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
    var gameResult = ""
    for(var i=0; i<winningConditions.length; i++){
        var counters = {X:0,O:0}
        for(var j=0; j<winningConditions[i].length;j++){
            var value = gameState[winningConditions[i][j]]
            if(value){
                counters[value]++
            }
        }
        console.log(counters)
        if(counters.X==3 || counters.O==3){
            gameResult = value+ " Won the game"
            break;
        }
    }

    if(remainingTries==0 && gameResult==''){
        gameResult = "Game Draw"
    }

    printResult(gameResult)
}

function printResult(result){    
    if(result){
        console.log(result)
        document.getElementById('gameResult').innerHTML = result
    }
}

function clearResult(){    
    document.getElementById('gameResult').innerHTML = ""
}

function chancePlayed(id){
    clearResult()
    if(gameState[id]!==""){
        printResult("Please choose another block or restart the game.")
    }else{
        console.log("in")
    }
}
validateWinning()