const moveSet = ['rock', 'paper', 'scissors'];

// set up move vs move logic for the game
const rpsLogic = (player1, player2) => {
    // if the moves are the same, it's a tie
    if (player1.move === player2.move) {
        return 'It\'s a tie!';}
    // if player 1 moves rock:
    else if (player1.move === 'rock'){
        if (player2.move === 'scissors'){
            return 'Player 1 wins!';
        }
        else if (player2.move === 'paper'){
            return 'Player 2 wins!';
        }
    }
    // if player 1 moves paper:
    else if (player1.move === 'paper'){
        if (player2.move === 'rock'){
            return 'Player 1 wins!';
        }
        else if (player2.move === 'scissors'){
            return 'Player 2 wins!';
        }
    }
    // if player 1 moves scissors:
    else if (player1.move === 'scissors'){
        if (player2.move === 'paper'){
            return 'Player 1 wins!';
        }
        else if (player2.move === 'rock'){
            return 'Player 2 wins!';
        }
    }
}



const rpsGamePlay = async () => {
    // set up player 1 and player 2
    let player1 = {};
    // set up player 2 as the computer
    let player2 = {name : 'Computer'};
    // set up readline for input and output
    const readline = require('readline/promises');
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });

    const setPlayerName = async () => {
        player1.name = await rl.question('What is your name? ');
        return player1.name;
    }

    const setPlayerMove = async () => {
        player1.move = await rl.question('Enter your move (rock, paper, scissors): ');
        player1.move = player1.move.toLowerCase();
        while (player1.move !== 'rock' && player1.move !== 'paper' && player1.move !== 'scissors') {
            console.log('Invalid move. Please enter rock, paper, or scissors.');
            player1.move = await rl.question('Enter your move (rock, paper, scissors): ');
        }
        return player1.move;
    }

    const setPlaying = async () => {
        playing = await rl.question('Do you want to play again? (y/n): ');
        if (playing === 'y') {
            return true;
        } else if (playing === 'n') {
            return false;
        }
        else {
            console.log('Invalid input. Please enter y or n.');
            return await setPlaying();
        }
    }
    
    const playRound = async () => {
        let playing = true;
        await setPlayerName();
        while (playing === true) {
            console.log(`Hello ${player1.name}! Let's play a game of Rock, Paper, Scissors!`);
            await setPlayerMove();
            player2.move = moveSet[Math.floor(Math.random() * moveSet.length)];
            console.log(rpsLogic(player1, player2));
            await setPlaying();
        }
    }

    await playRound();
    rl.close();
    return; 
}


rpsGamePlay();


// The use of await must occur in the same function as the function that calls it.
// You need await at each point where execution must what for the result