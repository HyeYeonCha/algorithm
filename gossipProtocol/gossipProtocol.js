const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(parseInt(line[i]));
      matrix.push(row);
    });
    return matrix;
  };
  
  const gossipProtocol = function (village, row, col) {
    // TODO: 여기에 코드를 작성합니다.
    let map = createMatrix(village);
    let mapRow = map[0].length;
    let mapCol = map.length;
    let check = Array.from(Array(mapCol), ()=> Array(mapRow).fill(false));
    let dx = [0, 1, 0, -1];
    let dy = [-1, 0, 1, 0];
    let queue = [];
    let answer = 0;
  
    queue.push([row, col]);
    check[row][col] = true;
    map[row][col] = 0;
  
    while(queue.length > 0){
      let [curCol, curRow] = queue.shift();
      if (map[curCol][curRow] > answer) answer = map[curCol][curRow];
  
      for(let i=0; i<4; i++){
        let newRow = curRow + dx[i];
        let newCol = curCol + dy[i];
  
        if(newRow >= 0 && newCol < mapCol && newRow < mapRow && newCol >= 0 && !check[newCol][newRow] && map[newCol][newRow] === 1){
          check[newCol][newRow] = true;
          queue.push([newCol, newRow]);
          map[newCol][newRow] = map[curCol][curRow] + 1;
        }
      }
    }
  
    return answer;
  };
  