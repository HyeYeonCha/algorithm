const robotPath = function (room, src, dst) {
    // TODO: 여기에 코드를 작성합니다.
    let col = room.length;
    let row = room[0].length;
    let [curCol, curRow] = src;
    let dist = Array.from(Array(col), () => new Array(row).fill(0));
    let dx = [0, 1, 0, -1];
    let dy = [-1, 0, 1, 0];
    let check = Array.from(Array(col), () => new Array(row).fill(false));
    
    let queue = [];
    queue.push(src); // 시작점
    check[curCol][curRow] = true;
    
    while(queue.length > 0){
      [curCol, curRow] = queue[0];
      queue.splice(0, 1);
  
      for(let i=0; i<4; i++){
        let newX = curRow + dx[i];
        let newY = curCol + dy[i];
        if(0<= newX && newY<col && 0<=newY && newX<row && room[newY][newX] === 0 && !check[newY][newX] && dist[newY][newX] === 0){
          check[newY][newX] = true;
          dist[newY][newX] = dist[curCol][curRow] + 1;
  
          queue.push([newY, newX]);
        }
      }
      
    }
  
    return dist[dst[0]][dst[1]];
  
  };
  