"use strict";

const getComputerHand = () => {
    const HANDS = ['rock', 'paper', 'scissors'];
    const i = Math.floor(Math.random() * HANDS.length);
    return HANDS[i];
}

const compareHands = (computer, player) => {
    const PLAYER_WINNING_COMBINATIONS = [ 
        'rock:paper',
        'paper:scissors', 
        'scissors:rock'
    ];
    if (computer === player) return;
    const isPlayerWinRound = PLAYER_WINNING_COMBINATIONS.includes(`${computer}:${player}`); 
    return isPlayerWinRound ? playerScore++ : computerScore++;
}

const displayResult = (computerHand, playerHand) => {
    const result = displayContainer.querySelectorAll('.fill-data')
    const GAME_DATA = [computerHand, playerHand, computerScore, playerScore];
    
    GAME_DATA.forEach((data, i) => {
        let textNode = document.createTextNode(data);
        result[i].textContent = '';
        result[i].appendChild(textNode);
    });
}

const endGame = () => {
    uiContainer.forEach((button) => {
        button.disabled = true;
    });
    const gameWinner = (computerScore > playerScore) ? 'Computer' : 'Player';
    displayContainer.append(gameWinner.concat(' wins! Reload page to play again.'))
};

const playGame = () => {
    const computerHand = getComputerHand();
    compareHands(computerHand, playerHand);
    if (computerScore === NUMBER_OF_ROUNDS || playerScore === NUMBER_OF_ROUNDS) {
        endGame();
    }
    displayResult(computerHand, playerHand);
}

const uiContainer = document.querySelectorAll('button');
const displayContainer = document.querySelector('.display-container');
const NUMBER_OF_ROUNDS = 5;

let computerScore = 0;
let playerScore = 0;
let playerHand = '';

uiContainer.forEach((button) => {
    button.addEventListener('click', () => {
        playerHand = button.id;
        playGame();
    });
});

