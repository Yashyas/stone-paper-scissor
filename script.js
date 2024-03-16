// Global variables
let computer_wins=0,player_wins=0,draw=0;
let totalRound=1;

function reset(){
    computer_wins=0,player_wins=0,draw=0,totalRound=1;
    startBtn.classList.toggle('green');
    
    setTimeout(function() {
        startBtn.classList.remove('green');
     }, 3000);
    
}

// Start/Restart the game 
let startBtn=document.querySelector("button");
startBtn.addEventListener('click',start);

function start(){
    console.log("started");
    reset();
    printScore();
    document.querySelector('#finalResult').textContent = " ";
    document.querySelector('#result').textContent = 'Round Decision';
    startBtn.textContent = 'Restart';
    playerInput();
   
}

// Player input in game
function playerInput(){
    let playerChoice =document.querySelector('.choice');
   
    playerChoice.addEventListener('click',choiceP);
}
function choiceP(e){
        let choice = e.target.id;
        // change user input text into user choice 
        document.querySelector('#userChoice').textContent = 'Player:' + choice;
        selected('player',choice);
        console.log(choice);
        playerChoice.removeEventListener('click',choiceP);
        roundResult(computerChoice(),choice);
}

// Computer choice for game 
function computerChoice(){
    let choices=["rock","paper","scissor"];
    let computer=Math.floor(Math.random() * choices.length);
    console.log("comp:"+ choices[computer]);
    selected('computer',choices[computer]);
    // Change computer input text into chomputer choice 
    document.querySelector('#computerChoice').textContent = 'Computer:' + choices[computer];


    return choices[computer];
};
// Selection css for computer and player choices 
function selected(choiceOf,choice){
    if(choiceOf=='player'){
        switch(choice){
            case 'rock':
                document.querySelector('#rock').classList.toggle('selected');
                clearSelection('#rock');
                break;
            case 'paper':
                document.querySelector('#paper').classList.toggle('selected');
                clearSelection('#paper');
                break;
            case 'scissor':
                document.querySelector('#scissor').classList.toggle('selected');
                clearSelection('#scissor');
                break;

        }
    }
    else{
        switch(choice){
            case 'rock':
                document.querySelector('#compRock').classList.toggle('selected');
                clearSelection('#compRock');
                break;
            case 'paper':
                document.querySelector('#compPaper').classList.toggle('selected');
                clearSelection('#compPaper');
                break;
            case 'scissor':
                document.querySelector('#compScissor').classList.toggle('selected');
                clearSelection('#compScissor');
                break;

        }

    };
}
// css selection clear 
function clearSelection(idof){

    setTimeout(function() {
       document.querySelector(idof).classList.remove('selected');
    }, 500);
}

// Game win/loss logic
function roundResult(computer,player){
    
    if(computer===player){
        scoreboard('draw');
        console.log("Draws");
    }
    else{
        if(computer=="rock"){
            if(player=="paper"){
                scoreboard('player_wins');
                console.log("player wins");
            }
            else{
                scoreboard('computer_wins');
            }
        }
        else if(computer=="paper"){
            if(player=="scissor"){
                scoreboard('player_wins');
                console.log("player wins");
            }
            else{
                scoreboard('computer_wins');
            } 
        }
        else{
            if(player=="rock"){
                scoreboard('player_wins');
                console.log("player wins");
            }
            else{
                scoreboard('computer_wins');
            }
        }
    }
    
};

// Scoreboard of game 
function printScore(){
    document.querySelector('#userScore').textContent = player_wins;
    document.querySelector('#drawScore').textContent = draw;
    document.querySelector('#computerScore').textContent = computer_wins;
}
function scoreboard(result){
    if(result=='draw'){
        draw++;
        document.querySelector('#result').textContent = 'Draw';
    }
    else if(result=='computer_wins'){
        computer_wins++;
        document.querySelector('#result').textContent = 'Loss';
    }
    else{
        player_wins++;
        document.querySelector('#result').textContent = 'Win';
    }

if(totalRound<5){
        ++totalRound;
        printScore();
        playerInput();


    }
else{
    printScore();
    final_result(computer_wins,player_wins,draw);
    reset();
    startBtn.textContent = 'Start';
    

}
}

// final result output

function final_result(computer,player,draw){
    let finalResult =document.querySelector('#finalResult');
    if(computer > player){
        finalResult.textContent = 'Computer Won';
        finalResult.style.color = "red";

    }
    else if(computer < player){
        finalResult.textContent = 'Player Won';
        finalResult.style.color = "green";
    }
    else{
        finalResult.textContent = 'Match Draw';
        finalResult.style.color = "gold";
    }
};

