const test = require("node:test");
const assert = require("node:assert/strict");
const { explorer, fetchUser, fetchAllUserTasks, fetchUserCompletedTasks, fetchUserIncompleteTasks, fetchUserCompletedTasksIds, fetchUserIncompleteTasksIds } = require("./explorer");

test("explorer", async () => {
    const userID = 1;
    const user = await fetchUser(userID);
    assert.equal(user.id, userID);
});

test("fetchUser", async () => {
    const userID = 1;
    const user = await fetchUser(userID);
    assert.equal(user.id, userID);
});

test("fetchAllUserTasks", async () => {
    const userID = 1;
    const allTasks = await fetchAllUserTasks(userID);
    assert.equal(allTasks.length, 20);
});

test("fetchAllUserTasks", async () => {
    let userID = 2;
    let allTasks = await fetchAllUserTasks(userID);
    assert.equal(allTasks.length, 20);
    userID = 3;
    allTasks = await fetchAllUserTasks(userID);
    assert.equal(allTasks.length, 20);
    userID = 4;
    allTasks = await fetchAllUserTasks(userID);
    assert.equal(allTasks.length, 20);
    userID = 5;
    allTasks = await fetchAllUserTasks(userID);
    assert.equal(allTasks.length, 20);
    userID = 6;
    allTasks = await fetchAllUserTasks(userID);
    assert.equal(allTasks.length, 20);
    userID = 7;
    allTasks = await fetchAllUserTasks(userID);
    assert.equal(allTasks.length, 20);
    userID = 8;
    allTasks = await fetchAllUserTasks(userID);
    assert.equal(allTasks.length, 20);
    userID = 9;
    allTasks = await fetchAllUserTasks(userID);
    assert.equal(allTasks.length, 20);
    userID = 10;
    allTasks = await fetchAllUserTasks(userID);
    assert.equal(allTasks.length, 20);
});

