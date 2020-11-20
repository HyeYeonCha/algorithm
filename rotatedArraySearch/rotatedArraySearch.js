const rotatedArraySearch = function (rotated, target) {
    // TODO : 여기에 코드를 작성합니다.
    let count =0;
  
    for(let i=0; i<rotated.length; i++){
      if(rotated[i] > rotated[i+1]){
        count = i + 1;
        break;
      }
    }
  
    let arr1 = rotated.slice(0, count);
    let arr2 = rotated.slice(count);
  
    if(arr1[count-1] >= target && arr1[0] <= target){
      return binarySearch(arr1, target);
    }else{
      return binarySearch(arr2, target) + count;
    }
  
  };
  
  function binarySearch(arr, target){
    let start = 0; 
    let end = arr.length - 1;
    let mid = Math.floor((start + end)/2);

    while(end - start >= 0){
    if(arr[mid] === target){
    return mid;
    }else if(arr[mid] > target){
    end = mid - 1;
    }else if(arr[mid] < target){
    start = mid + 1;
    }
    mid = Math.floor((start + end)/2);
    }

    return -1;
}

/* 다른 풀이
 const rotatedArraySearch = function (rotated, target) {
  let left = 0,
    right = rotated.length - 1;

  while (left <= right) {
    let middle = parseInt((right + left) / 2);

    if (rotated[middle] === target) {
      return middle;
    }

    if (rotated[left] < rotated[middle]) {
      // 왼쪽 절반이 정렬되어 있는 상태
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 상태
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};
*/