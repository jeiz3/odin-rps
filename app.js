"use strict";

const HANDS = ['rock', 'paper', 'scissors'];

const getComputerHand = () => {
    let i = Math.floor(Math.random() * HANDS.length);
    return HANDS[i];
}

const compareHands = (computer, player) => {
    const PLAYER_WINNING_COMBINATIONS = [ 
        'rock:paper',
        'paper:scissors', 
        'scissors:rock'
    ];
    if ((computer === player) || (!HANDS.includes(player))) {
        return "none, draw / error";
    }

    const WINNER = PLAYER_WINNING_COMBINATIONS.includes(`${computer}:${player}`);
    return WINNER ? 'player' : 'computer';
}

const computerHand = getComputerHand();
let playerHand =  (prompt("Your turn is: ", '')).toLowerCase();

const outcome = `Computer: ${computerHand}\nWinner: `;

console.log(outcome.concat(compareHands(computerHand, playerHand)));


