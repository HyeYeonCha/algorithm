const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 브루트 포스
    let largest = arr[0] * arr[1] * arr[2];
    if(arr.length === 3){
      return largest;
    }
  
    for(let i=0; i<arr.length-2; i++){
      for(let j=i+1; j<arr.length-1; j++){
        for(let k=j+1; k<arr.length; k++){
          if(arr[i] * arr[j] * arr[k] > largest){
            largest = arr[i] * arr[j] * arr[k];
          }
        }
      }
    }
  
    return largest;
  };
  
  /* 좀 더 효율적인 코드 (음수가 있기에 가능)
  const largestProductOfThree = function (arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const len = arr.length;
    const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
    const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
    return Math.max(candi1, candi2);
  };
  */