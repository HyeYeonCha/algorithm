const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(line[i]);
      matrix.push(row);
    });
    return matrix;
  };
  
  const getAgents = (village) => {
    const agents = [];
    for (let row = 0; row < village.length; row++) {
      for (let col = 0; col < village.length; col++) {
        if (village[row][col] === '2') agents.push([row, col]);
      }
    }
    return agents;
  };
  
  const gossipProtocol2 = function (village, num) {
    const N = village.length;
    const MOVES = [
      [-1, 0], // UP
      [1, 0], // DOWN
      [0, 1], // RIGHT
      [0, -1], // LEFT
    ];
    const MAX_SIZE = N * N;
    const isValid = (row, col) => row >= 0 && row < N && col >= 0 && col < N;
    let front, rear;
    const isEmpty = (queue) => front === rear;
    const enQueue = (queue, pos) => {
      queue[rear++] = pos;
    };
    const deQueue = (queue) => {
      const pos = queue[front++];
      return pos;
    };
  
    const bfs = (sources) => {
      const matrix = createMatrix(village);
      const queue = Array(MAX_SIZE);
      front = 0;
      rear = 0;
  
      sources.forEach((src) => {
        const [row, col] = src;
        matrix[row][col] = 0;
        enQueue(queue, src);
      });
  
      let cnt = 0;
      while (isEmpty(queue) === false) {
        const [row, col] = deQueue(queue);
        cnt = matrix[row][col];
  
        MOVES.forEach((move) => {
          const [rDiff, cDiff] = move;
          const nextRow = row + rDiff;
          const nextCol = col + cDiff;
          if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === '1') {
            enQueue(queue, [nextRow, nextCol]);
            matrix[nextRow][nextCol] = matrix[row][col] + 1;
          }
        });
      }
  
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
          if (matrix[row][col] === '1') return Number.MAX_SAFE_INTEGER;
        }
      }
      return cnt;
    };
  
    const agents = getAgents(village);
    const getCombinations = (idx, size, num, result) => {
      if (size - idx <= num) {
        for (let i = idx; i < size; i++) result.push(i);
        return [result];
      }
      if (num === 0) {
        return [result];
      }
  
      const picked = getCombinations(idx + 1, size, num - 1, result.concat(idx));
      const notPicked = getCombinations(idx + 1, size, num, result);
      return picked.concat(notPicked);
    };
  
    const combs = getCombinations(0, agents.length, num, []);
    let min = Number.MAX_SAFE_INTEGER;
    combs.forEach((c) => {
      const sources = c.map((idx) => agents[idx]);
      const result = bfs(sources);
      min = Math.min(min, result);
    });
    return min;
  };