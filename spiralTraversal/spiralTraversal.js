const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = "";
  let row = 0,
    col = -1;
  let inc = 1; // 증가 또는 감소
  let n = matrix.length; // 세로
  let m = matrix[0].length === n ? n : matrix[0].length; // 가로

  while (n > 0 && m > 0) {
    for (let i = 0; i < m; i++) {
      col += inc;
      if (matrix[row][col]) answer += matrix[row][col];
    }
    if (n === 0 && m === 0) break;
    n--;
    m--;
    for (let i = 0; i < n; i++) {
      row += inc;
      if (matrix[row][col]) answer += matrix[row][col];
    }
    inc *= -1;
  }

  return answer;
};
