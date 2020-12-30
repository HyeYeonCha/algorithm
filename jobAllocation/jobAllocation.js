const jobAllocation = function (jobs, wokersNum) {
    // TODO: 여기에 코드를 작성합니다.
    const memo = [];
    for (let i = 0; i < wokersNum; i++) memo.push(Array(jobs.length).fill(-1));
    let workload = 0;
    for (let i = jobs.length - 1; i >= wokersNum - 1; i--) {
      workload = workload + jobs[i];
      memo[wokersNum - 1][i] = workload;
    }
  
    const aux = (workerIdx, jobIdx, jobs, left) => {
      if (memo[workerIdx][jobIdx] !== -1) return memo[workerIdx][jobIdx];
  
      let workload = 0;
      let min = Number.MAX_SAFE_INTEGER;
      for (let i = jobIdx; i < jobs.length - left; i++) {
        workload = workload + jobs[i];
        const hardest = Math.max(
          workload,
          aux(workerIdx + 1, i + 1, jobs, left - 1)
        );
        min = Math.min(min, hardest);
      }
      memo[workerIdx][jobIdx] = min;
      return min;
    };
  
    return aux(0, 0, jobs, wokersNum - 1);
  };
  