
// set up list of moves 
const move = ['rock', 'paper', 'scissors'];

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

// set up the game play
const rpsGamePlay = () => {
    // set up player 1 and player 2
    let player1 = {};
    // set up player 2 as the computer
    let player2 = {name : 'Computer'};
    // set up readline for input and output
    const readline = require('readline');
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });

    // set up the round play function
    const playRound = () => {
        // set up the computer's random move
        player2.move = move[Math.floor(Math.random() * move.length)];
        // set up the player's move
        // set up the readline question for the player's move
        rl.question('Enter your move (rock, paper, scissors): ', (playerMove) => {
            player1.move = playerMove;
            console.log(rpsLogic(player1, player2));
            // set up the readline question for the player's continue as a nested function inside the player's move function
            
            rl.question('Do you want to continue? (y/n): ', (answer) => {
                if (answer.toLowerCase() === 'y') {
                    // set up the next round as a recursive call to the playRound function
                    // a loop is not usable as a while loop is synchronous and the readline question is asynchronous
                    playRound();  // next round — recursion replaces the while loop
                } else {
                    rl.close();
                }
            });
        });
    }

    rl.question('What is your name? ', (name) => {
        player1.name = name;
        playRound();
    });

};

rpsGamePlay();


