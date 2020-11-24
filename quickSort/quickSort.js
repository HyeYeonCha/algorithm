const quickSort = function (arr, callback) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  if (callback) {
    for (let i = 1; i < arr.length; i++) {
      if (callback(pivot) < callback(arr[i])) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (pivot < arr[i]) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
  }
  let leftArr = quickSort(left);
  let rightArr = quickSort(right);

  return [...leftArr, pivot, ...rightArr];
};
