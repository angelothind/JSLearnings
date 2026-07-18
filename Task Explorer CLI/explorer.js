// urls that can be accessed by the user:
//https://jsonplaceholder.typicode.com/users/{user_id} = users data (ALL USERS)
// https://jsonplaceholder.typicode.com/users/{user_id} = user data
// https://jsonplaceholder.typicode.com/todos = todos data (ALL TODOS)
// https://jsonplaceholder.typicode.com/todos={user_id} = todos data



const readline = require('readline/promises');
const {stdin: input, stdout: output} = require('process');

const rl = readline.createInterface({ input, output });

const fetchUser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    return data;
}

const fetchAllUserTasks = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
    const data = await response.json();
    return data;
}

const fetchUserCompletedTasks = async (id) => {
    const response = await fetchAllUserTasks(id);
    const completedTasks = response.filter(task => task.completed === true);
    return completedTasks;
}

const fetchUserIncompleteTasks = async (id) => {
    const response = await fetchAllUserTasks(id);
    const incompleteTasks = response.filter(task => task.completed === false);
    return incompleteTasks;
}

const fetchUserCompletedTasksIds = async (id) => {
    const response = await fetchUserCompletedTasks(id);
    const completedTasksIds = response.map(task => task.id);
    return completedTasksIds;
}

const fetchUserIncompleteTasksIds = async (id) => {
    const response = await fetchUserIncompleteTasks(id);
    const incompleteTasksIds = response.map(task => task.id);
    return incompleteTasksIds;
}

const disaplaySummary = async (id) => {
    const userData = await fetchUser(id);
    const {name, email} = userData;
    output.write(`User: ${name} \n`);
    output.write(`Email: ${email} \n`);
    output.write(`\n`);
    const allTasks = await fetchAllUserTasks(id);
    const numberOfTasks = allTasks.length;
    const completedTasks = await fetchUserCompletedTasks(id);
    const numberOfCompletedTasks = completedTasks.length;
    const incompleteTasks = await fetchUserIncompleteTasks(id);
    const numberOfIncompleteTasks = incompleteTasks.length;
    output.write(`Number of Tasks: ${numberOfTasks} \n`);
    output.write(`Number of Completed Tasks: ${numberOfCompletedTasks} \n`);
    output.write(`Number of Incomplete Tasks: ${numberOfIncompleteTasks} \n`);
    output.write(`\n`);
}


const explorer = async () => {
    
    output.write('=== Task Explorer === \n');
    output.write('\n');
    output.write('Enter a user ID from 1–10, or type "exit": \n');
    const userID = await rl.question('> ');
    if (userID === 'exit') {
        rl.close();
        return;
    }

    await disaplaySummary(userID);


    
}

explorer();