// urls that can be accessed by the user:
// https://jsonplaceholder.typicode.com/users/{user_id}



const readline = require('readline/promises');
const {stdin: input, stdout: output} = require('process');

const rl = readline.createInterface({ input, output });

const explorer = async () => {
    output.write('=== Task Explorer === \n');
    output.write('\n');
    output.write('Enter a user ID from 1–10, or type "exit": \n');
    output.write('> ');



    
}

explorer();