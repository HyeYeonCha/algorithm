const merge = function (left, right, comparator = (item) => item) {
    let merged = [];
    let leftIdx = 0,
      rightIdx = 0;
    const size = left.length + right.length;
  
    for (let i = 0; i < size; i++) {
      if (leftIdx >= left.length) {
        merged.push(right[rightIdx]);
        rightIdx++;
      } else if (
        rightIdx >= right.length ||
        comparator(left[leftIdx]) <= comparator(right[rightIdx])
      ) {
        merged.push(left[leftIdx]);
        leftIdx++;
      } else {
        merged.push(right[rightIdx]);
        rightIdx++;
      }
    }
  
    return merged;
  };
  
  const mergeSort = function (arr, comparator) {
    const aux = (start, end) => {
      if (start >= end) return [arr[start]];
      const mid = Math.floor((start + end) / 2);
      const right = aux(start, mid);
      const left = aux(mid + 1, end);
      return merge(left, right, comparator);
    };
    return aux(0, arr.length - 1);
  };
  
  /*
  모든 좌표가 아닌 높이가 변하는 부분만 계산한다.
  색종이에 대한 정보가 아래와 같이 주어졌을 때, 전체 면적을 구하는 알고리즘
  const papers = [
    [0, 0, 4, 4],
    [2, 1, 2, 6],
    [1, 5, 5, 3],
    [2, 2, 3, 3],
  ];
  
  각 사각형의 시작과 끝을 범위(range) 표기로 각각 s(start), e(end)로 표시한다.
  e는 사각형이 끝나느 x좌표의 다음 좌표에 표기한다.
  7 |   x x x x x
  6 |   x x x x x
  5 |   s x x x x e
  4 |     x x x
  3 | x x x x x
  2 | x x s x x e
  1 | x x s x e
  0 | s x x x e
  ------------------
      0 1 2 3 4 5 6 7
  
  새로운 변화(시작 또는 끝)가 있을 때마다 면적을 계산하여 더한다.
  
  1) 4를 더한다. (면적은 4)
  7 |   
  6 |   
  5 |   
  4 |   
  3 | x 
  2 | x 
  1 | x 
  0 | s 
  ------------------
      0 1 2 3 4 5 6 7
  
  2) 7을 더한다. (면적은 11)
  7 |   x 
  6 |   x 
  5 |   s 
  4 |     
  3 |   x 
  2 |   x 
  1 |   x 
  0 |   x 
  ------------------
      0 1 2 3 4 5 6 7
  
  3) 16을 더한다. (면적은 27)
  7 |     x x 
  6 |     x x 
  5 |     x x 
  4 |     x x 
  3 |     x x 
  2 |     s x 
  1 |     s x 
  0 |     x x 
  ------------------
      0 1 2 3 4 5 6 7
  
  4) 6을 더한다. (면적은 33)
  7 |         x 
  6 |         x 
  5 |         x 
  4 |         x
  3 |         x
  2 |         x 
  1 |         
  0 |         
  ------------------
      0 1 2 3 4 5 6 7
  
  4) 3을 더한다. (면적은 36)
  7 |            x
  6 |            x
  5 |            x 
  4 |         
  3 |         
  2 |         
  1 |         
  0 |         
  ------------------
      0 1 2 3 4 5 6 7
  */
  function shadowOfPapers(papers) {
    const coordinates = [];
    papers.forEach((p) => {
      const [x, y, width, height] = p;
      coordinates.push([x, y, y + height - 1, 1]);
      coordinates.push([x + width, y, y + height - 1, -1]);
    });
  
    const sorted = mergeSort(coordinates, (c) => c[0]);
    const height = Array(10000 + 1).fill(0);
    for (let y = sorted[0][1]; y <= sorted[0][2]; y++) height[y] = 1;
    let sum = 0;
    for (let i = 1; i < sorted.length; i++) {
      const h = height.reduce((acc, cur) => acc + (cur === 0 ? 0 : 1), 0);
      const x2 = sorted[i][0];
      const x1 = sorted[i - 1][0];
      sum = sum + (x2 - x1) * h;
  
      const y1 = sorted[i][1];
      const y2 = sorted[i][2];
      for (let y = y1; y <= y2; y++) height[y] += sorted[i][3];
    }
    return sum;
  }