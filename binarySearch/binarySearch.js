const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
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
      
  };
  