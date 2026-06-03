function earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration) {
    const n = landStartTime.length, m = waterStartTime.length;

    // Finish times for land
    const finishLand = Array(n);
    for (let i = 0; i < n; i++) {
        finishLand[i] = landStartTime[i] + landDuration[i];
    }
    finishLand.sort((a, b) => a - b);

    let res = Infinity;

    // Process water start times with finishLand
    for (let i = 0; i < m; i++) {
        const waterStart = waterStartTime[i];
        const it = lowerBound(finishLand, waterStart);
        if (it === 0) {
            res = Math.min(res, finishLand[it] + waterDuration[i]);
        } else {
            res = Math.min(res, waterStart + waterDuration[i]);
        }
    }

    // Finish times for water
    const finishWater = Array(m);
    for (let i = 0; i < m; i++) {
        finishWater[i] = waterStartTime[i] + waterDuration[i];
    }
    finishWater.sort((a, b) => a - b);

    // Process land start times with finishWater
    for (let i = 0; i < n; i++) {
        const landStart = landStartTime[i];
        const it = lowerBound(finishWater, landStart);
        if (it === 0) {
            res = Math.min(res, finishWater[it] + landDuration[i]);
        } else {
            res = Math.min(res, landStart + landDuration[i]);
        }
    }

    return res;

    // Binary search for lower_bound
    function lowerBound(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}