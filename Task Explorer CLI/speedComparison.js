const {
    disaplaySummary,
    disaplaySummaryConcurent
} = require("./explorer");

const measureSequential = async (userId) => {
    const start = performance.now();

    await disaplaySummary(userId);

    return performance.now() - start;
};

const measureConcurrent = async (userId) => {
    const start = performance.now();

    await disaplaySummaryConcurent(userId);

    return performance.now() - start;
};

const average = (times) => {
    return times.reduce((total, time) => total + time, 0) / times.length;
};

const compareSpeeds = async (userId, numberOfRuns = 5) => {
    const sequentialTimes = [];
    const concurrentTimes = [];

    for (let run = 1; run <= numberOfRuns; run++) {
        let sequentialTime;
        let concurrentTime;

        if (run % 2 === 1) {
            sequentialTime = await measureSequential(userId);
            concurrentTime = await measureConcurrent(userId);
        } else {
            concurrentTime = await measureConcurrent(userId);
            sequentialTime = await measureSequential(userId);
        }

        sequentialTimes.push(sequentialTime);
        concurrentTimes.push(concurrentTime);

        console.log(`Run ${run}:`);
        console.log(`  Sequential: ${sequentialTime.toFixed(2)} ms`);
        console.log(`  Concurrent: ${concurrentTime.toFixed(2)} ms`);
    }

    console.log("\nAverage:");
    console.log(`  Sequential: ${average(sequentialTimes).toFixed(2)} ms`);
    console.log(`  Concurrent: ${average(concurrentTimes).toFixed(2)} ms`);
};

compareSpeeds(1).catch((error) => {
    console.error("Unable to run speed comparison:", error.message);
});
