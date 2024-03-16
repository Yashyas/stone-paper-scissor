// Global variables
let computer_wins=0,player_wins=0,draw=0;
let totalRound=1;

// Start/Restart the game 
let startBtn=document.querySelector("button");
startBtn.addEventListener('click',start);

function start(){

    // startBtn.removeEventListener('click',start);
    console.log("started");
    startBtn.textContent = 'Restart';
    computer_wins=0,player_wins=0,draw=0,totalRound=1;
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
        console.log(choice);
        playerChoice.removeEventListener('click',choiceP);
        roundResult(computerChoice(),choice);
}

// Computer choice for game 
function computerChoice(){
    let choices=["rock","paper","scissor"];
    let computer=Math.floor(Math.random() * choices.length);
    console.log("comp:"+ choices[computer]);
    // Change computer input text into chomputer choice 
    document.querySelector('#computerChoice').textContent = 'Computer:' + choices[computer];

    return choices[computer];
};

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
    // final_result(computer_wins,player_wins,draw);
};
// function playerWins(){
//     document.querySelector('#result').textContent = 'Player Won';
// }
function scoreboard(result){
    if(result=='draw'){
        draw++;
    }
    else if(result=='computer_wins'){
        computer_wins++;
    }
    else{
        player_wins++;
    }

if(totalRound<5){
        ++totalRound;
        playerInput();
    }
else{
    final_result(computer_wins,player_wins,draw);
}
}

// final result output

function final_result(computer,player,draw){
    // alert("Computer wins:"+computer + " Player wins:" +player + " Draw:" + draw);
    if(computer > player){
        document.querySelector('#result').textContent = 'Computer Won';
    }
    else if(computer < player){
        document.querySelector('#result').textContent = 'Player Won';
    }
    else{
        document.querySelector('#result').textContent = 'Match Draw';
    }
};

