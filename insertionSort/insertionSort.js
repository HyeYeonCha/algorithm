const insertionSort = function (arr, cb) {
    // TODO: 여기에 코드를 작성합니다.
     let i, j, temp;
     // advanced
    if(cb){
      for(i=1; i<arr.length; i++){
      temp = arr[i];
      for(j=i-1; j>=0 && cb(arr[j]) > cb(temp); j--){
        arr[j+1] = arr[j];
      }
      arr[j+1] = temp;
     }
    }else{
      for(i=1; i<arr.length; i++){
      temp = arr[i];
      for(j=i-1; j>=0 && arr[j] > temp; j--){
        arr[j+1] = arr[j];
      }
      arr[j+1] = temp;
     }
    }
   
    return arr;
  };
  