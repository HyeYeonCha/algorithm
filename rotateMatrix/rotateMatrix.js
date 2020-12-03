const rotateMatrix = function (matrix, k = 1) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    let count = 0;
  
    let rotate = (matrixArr) =>{ // 세로 * 가로
      if(count === k || matrixArr.length === 0){
        return result;
      }
      let rotateArr = [];
      for(let j= 0; j<matrixArr[0].length; j++){
        let tem = [];
        for(let i=matrixArr.length-1; i>=0; i--){
          tem.push(matrixArr[i][j]);
        }
        rotateArr.push(tem);
      }
      count++;
      result = rotateArr;
      rotate(result); 
    }
    rotate(matrix);
    return result;
  };
  