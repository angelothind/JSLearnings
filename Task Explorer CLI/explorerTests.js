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

