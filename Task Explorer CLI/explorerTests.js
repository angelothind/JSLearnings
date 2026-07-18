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

