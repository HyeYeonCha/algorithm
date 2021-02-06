function solution(board, moves) {
  let answer = 0;
  let basket = [];
  for (let move of moves) {
    for (let col of board) {
      if (col[move - 1] === 0) {
        continue;
      } else if (col[move - 1] > 0) {
        basket.push(col[move - 1]);
        col[move - 1] = 0;
        break;
      }
    }
  }

  recurCount(basket);
  function recurCount(basket) {
    for (let i = 0; i < basket.length; i++) {
      if (basket[i] === basket[i + 1]) {
        basket.splice(i, 2);
        answer += 2;
        recurCount(basket);
      }
    }
  }

  return answer;
}
