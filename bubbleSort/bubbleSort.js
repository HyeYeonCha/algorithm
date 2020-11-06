// i를 선언하여, 테스트를 원활하게 할 수 있습니다.
let i;

// 헬퍼 함수가 필요하다면 얼마든지 만들어서 사용하세요!

const bubbleSort = function (array) {
  // TODO: Your code here!
  for(let j=0; j<array.length-1; j++){
    for(let k=0; k<array.length-1; k++){
      if(array[k] > array[k+1]){
        i = array[k];
        array[k] = array[k+1];
        array[k+1] = i;
      }
    }
  }

  return array;
};


/* 시간복잡도 개선
// i를 선언하여, 테스트를 원활하게 할 수 있습니다.
let i;

// 헬퍼 함수가 필요하다면 얼마든지 만들어서 사용하세요!
const swap = function(array, index1, index2){
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

const bubbleSort = function (array) {
  // TODO: Your code here!
  let checkSwap = 0;
  for(let j=0; j<array.length; j++){
    for(let k=0; k<array.length-1-j; k++){ // 루프가 끝날 때마다 맨 뒤의 요소는 고정
      if(array[k] > array[k+1]){
        checkSwap++;
        array = swap(array, k, k+1);
      }
    }
    if(!checkSwap){ // 1회전 이후 바뀐 값이 없을 경우 break
      break;
    }
  }

  return array;
};

*/