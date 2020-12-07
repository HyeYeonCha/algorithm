function radixSort(arr) {
  // todo: 여기에 코드를 작성합니다.
  let queue = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };
  let max = arr[0];
  for (let el of arr) {
    if (max < el) max = el;
  }

  let radix = 1;
  while (1) {
    if (radix >= max) break;
    radix *= 10;
  }

  for (let i = 1; i <= radix; i *= 10) {
    for (let el of arr) {
      let tem;
      if (el < i) {
        tem = 0;
      } else {
        tem = parseInt((el / i) % 10);
      }
      queue[tem].push(el);
    }

    let idx = 0;
    for (let j = 0; j < 10; j++) {
      while (queue[j].length !== 0) {
        arr[idx++] = queue[j].shift();
      }
    }
  }
  return arr;
}

// Advanced
function radixSort(arr) {
  // todo: 여기에 코드를 작성합니다.
  let left = [];
  let right = [];

  for (let item of arr) {
    if (item < 0) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  let getMax = (sortArr) => {
    let max = sortArr[0];
    for (let el of sortArr) {
      if (max < el) max = el;
    }
    return max;
  };

  /*
     (sortArr.reduce((acc, cur)=>{
      if(acc < cur) return cur;
      else return acc;
    }, 0));
    */

  count(left, getMax(left));
  count(right, getMax(right));

  return left.reverse().concat(right);
}

function count(arr, max) {
  let queue = Array(10).fill(0);
  let radix = 1;

  while (1) {
    if (radix >= max) break;
    radix *= 10;
  }

  for (let i = 1; i <= radix; i *= 10) {
    for (let el of arr) {
      let tem;
      if (el < i) {
        tem = 0;
      } else {
        tem = parseInt((el / i) % 10);
      }

      queue[tem]++;
    }

    queue.reduce((sum, cur, idx) => {
      queue[idx] = sum + cur;
      return sum + cur;
    });

    let i = N - 1;
    while (i >= 0) {
      const idx = Math.floor(arr[i] / radix) % 10;
      // count[idx]: 현재 radix의 idx까지 누적 개수
      // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
      output[count[idx] - 1] = arr[i];
      count[idx] -= 1;
      i--;
    }

    // let idx = 0;
    // for(let j=0; j<10; j++){
    //   if(queue[j])
    //   while(queue[j].length !== 0){
    //     arr[idx++] = queue[j].shift();
    //   }
    // }
  }
}

// 2

function count(arr, max, radix) {
  let queue = Array(10).fill(0);
  let output = Array(arr.length).fill(0);

  for (let el of arr) {
    let tem = parseInt((el / radix) % 10);
    queue[tem]++;
  }

  queue.reduce((sum, cur, idx) => {
    queue[idx] = sum + cur;
    return sum + cur;
  });

  let j = arr.length - 1;
  while (j >= 0) {
    const idx = Math.floor(arr[j] / radix) % 10;
    output[queue[idx] - 1] = arr[j];
    queue[idx] -= 1;
    j--;
  }
  return output;
}

function radixSort(arr) {
  // todo: 여기에 코드를 작성합니다.
  let left = [];
  let right = [];

  for (let item of arr) {
    if (item < 0) {
      left.push(item * -1);
    } else {
      right.push(item);
    }
  }

  let getMax = (sortArr) => {
    let max = sortArr[0];
    for (let el of sortArr) {
      if (max < el) max = el;
    }
    return max;
  };

  let max = getMax(left);
  let radix = 1;

  while (parseInt(max / radix) > 0) {
    left = count(left, max, radix);
    radix *= 10;
  }

  radix = 1;
  max = getMax(right);

  while (parseInt(max / radix) > 0) {
    right = count(right, max, radix);
    radix *= 10;
  }

  return left
    .reverse()
    .map((el) => (el *= -1))
    .concat(right);
}
