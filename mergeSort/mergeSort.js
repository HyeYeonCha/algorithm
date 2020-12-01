const mergeSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    function merge(mergeArr, start, middle, end){
      let i = start;
      let j = middle + 1;
      let k = start;
  
      while(i<= middle && j <= end){
        if(mergeArr[i] <= mergeArr[j]){
          result[k] = mergeArr[i];
          i++;
        }else{
          result[k] = mergeArr[j];
          j++;
        }
        k++;
      }
  
      if(i > middle){
        for(let t=j; t<=end; t++){
          result[k] = mergeArr[t];
          k++;
        }
      }else{
        for(let t=i; t<=middle; t++){
          result[k] = mergeArr[t];
          k++;
        }
      }
  
      for(let t=start; t<=end; t++){
        mergeArr[t] = result[t];
      }
  
    }
    function sort(mArr, left, right){
      if(left < right){
        let mid = parseInt((left + right)/2);
        sort(mArr, left, mid);
        sort(mArr, mid+1, right);
        merge(mArr, left, mid, right);
      }
    }
  
    sort(arr, 0, arr.length-1);
  
    return arr;
  };
  