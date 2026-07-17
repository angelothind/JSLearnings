# Task Explorer CLI

## Project goal

Build a terminal application that retrieves users and their tasks from an online API. The user should be able to inspect completed and incomplete tasks without restarting the program.

This project practises:

- `async`/`await`
- `fetch`
- `Promise.all()`
- `try...catch...finally`
- Terminal input with `readline/promises`
- Array filtering
- Input validation
- Separating code into focused functions

## Data source

Use the JSONPlaceholder API:

```text
https://jsonplaceholder.typicode.com/users/USER_ID
https://jsonplaceholder.typicode.com/todos?userId=USER_ID
```

Valid user IDs are `1` through `10`.

## Expected user experience

When the application starts, display:

```text
=== Task Explorer ===

Enter a user ID from 1–10, or type "exit":
> 3
```

Fetch the selected user and their tasks, then display a summary:

```text
User: Clementine Bauch
Email: Nathan@yesenia.net

Tasks: 20 total
Completed: 7
Incomplete: 13
```

Next, display the task menu:

```text
What would you like to view?

1. Completed tasks
2. Incomplete tasks
3. All tasks
4. Choose another user
6. Get only Id of completed tasks
7. Get only Id of completed tasks
8. Exit

> 2
```

Display the selected tasks:

```text
Incomplete tasks:

[ ] 1. fugiat veniam minus
[ ] 2. et porro tempora
[ ] 3. laboriosam mollitia
```

After displaying a list, show the task menu again.

## Functional requirements

### 1. Read terminal input

Create a `readline` interface using `readline/promises`. The application must wait for answers using `await`.

### 2. Validate the user ID

Accept only whole numbers from `1` to `10`.

Invalid input must not crash the application:

```text
> hello
Please enter a whole number from 1–10.

> 25
No user exists with that ID.
```

Allow the user to enter `exit` at the initial prompt.

### 3. Retrieve API data

Fetch the selected user and their tasks. Check `response.ok` before converting each response to JSON.

Once the basic version works, retrieve both resources concurrently:

```js
const [userResponse, tasksResponse] = await Promise.all([
    fetch(userUrl),
    fetch(tasksUrl)
]);
```

### 4. Display the user summary

Display:

- The user's name
- The user's email address
- Total number of tasks
- Number of completed tasks
- Number of incomplete tasks

Calculate the task totals from the downloaded task array.

### 5. Categorize tasks

Use `filter()` to create:

- `completedTasks`
- `incompleteTasks`

Do not manually create separate task data.

### 6. Display tasks

Each task should include:

- A completion marker
- Its position or ID
- Its title

For example:

```text
[x] 1. delectus aut autem
[ ] 2. quis ut nam facilis
```

Use one reusable display function for all task categories.

### 7. Keep the application running

After displaying a task list, return to the menu. The application should stop only when the user selects Exit or enters `exit` at an appropriate prompt.

A loop such as `while (running)` can control this.

### 8. Handle errors

Use `try...catch` to handle:

- No internet connection
- Failed API requests
- Invalid API responses
- Unexpected program errors

Display a readable message instead of a technical stack trace:

```text
Unable to retrieve tasks. Check your internet connection and try again.
```

### 9. Close `readline`

The input interface must close whether the application exits normally or encounters an error. Use `finally` around the main application call.

## Suggested functions

Functions should have one clear responsibility:

```text
main()
askForUserId()
fetchUserAndTasks(userId)
validateResponse(response)
displayUserSummary(user, tasks)
displayTaskMenu()
filterTasks(tasks, status)
displayTasks(tasks)
```

These names are suggestions, not requirements.

## Development stages

1. Ask for and print a user ID.
2. Validate the ID.
3. Fetch and display one user.
4. Fetch that user's tasks.
5. Separate completed and incomplete tasks.
6. Add the task menu.
7. Add the repeating loop.
8. Add error handling and guaranteed cleanup.
9. Replace sequential requests with `Promise.all()`.

## Completion checklist

The project is complete when:

- [ ] Valid IDs retrieve the correct user.
- [ ] Invalid input does not crash the application.
- [ ] Completed and incomplete lists are correct.
- [ ] Every menu option works.
- [ ] Multiple users can be inspected in one session.
- [ ] API failures produce a readable message.
- [ ] The application exits cleanly.
- [ ] `readline` always closes.

## Optional extensions

- Search task titles by keyword.
- Sort tasks alphabetically.
- Show only the first five tasks.
- Add a simulated loading delay.
- Split API, input, and display functions into modules.
