// urls that can be accessed by the user:
//https://jsonplaceholder.typicode.com/users/{user_id} = users data (ALL USERS)
// https://jsonplaceholder.typicode.com/users/{user_id} = user data
// https://jsonplaceholder.typicode.com/todos = todos data (ALL TODOS)
// https://jsonplaceholder.typicode.com/todos={user_id} = todos data



const readline = require('readline/promises');
const {stdin: input, stdout: output} = require('process');

const rl = readline.createInterface({ input, output });

const explorer = async () => {
    
    output.write('=== Task Explorer === \n');
    output.write('\n');
    output.write('Enter a user ID from 1–10, or type "exit": \n');
    const userID = await rl.question('> ');
    if (userID === 'exit') {
        rl.close();
        return;
    }

    const fetchUser = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        return data;
    }



    
}

explorer();