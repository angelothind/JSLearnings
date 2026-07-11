

const move = ['rock', 'paper', 'scissors'];

const rpsLogic = (player1, player2) => {
    if (player1.move === player2.move) {
        return 'It\'s a tie!';}
    else if (player1.move === 'rock'){
        if (player2.move === 'scissors'){
            return 'Player 1 wins!';
        }
        else if (player2.move === 'paper'){
            return 'Player 2 wins!';
        }
    }
    else if (player1.move === 'paper'){
        if (player2.move === 'rock'){
            return 'Player 1 wins!';
        }
        else if (player2.move === 'scissors'){
            return 'Player 2 wins!';
        }
    }
    else if (player1.move === 'scissors'){
        if (player2.move === 'paper'){
            return 'Player 1 wins!';
        }
        else if (player2.move === 'rock'){
            return 'Player 2 wins!';
        }
    }
}

const rpsGamePlay = () => {
    let player1 = {};
    let player2 = {};
    player2.name = 'Computer';
    player2.move = move[Math.floor(Math.random() * move.length)];
    const readline = require('readline');
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });


    let continueGame = 'y';
    rl.question('What is your name?', (name) =>{
        player1.name = name;
        while (continueGame === 'y') {
            rl.question('Enter your move (rock, paper, scissors): ', (move) => {
                player1.move = move;
                console.log(rpsLogic(player1, player2));
                rl.question('Do you want to continue? (y/n)', (continueAnswer) => {
                    continueGame = continueAnswer;
                } )
            } )
        }
        rl.close();
    } )

    return console.log(rpsLogic(player1, player2));

}

rpsGamePlay();


