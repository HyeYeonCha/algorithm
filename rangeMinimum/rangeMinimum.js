const rangeMinimum = function (arr, ranges) {
    // TODO: 여기에 코드를 작성합니다.
    // let answer = [];
    // let getMin = (idx1, idx2) => {
    //   let min = arr[idx1];
    //   for(i=idx1; i<=idx2; i++){
    //     if(min > arr[i])
    //       min = arr[i];
    //   }
    //   return min;
    // } 
    // ranges.map(range => {
    //   answer.push(getMin(range[0], range[1]))
    // });
    // return answer;
  
    const createMinTree = (arr, ts, te) => {
      if (ts === te) {
        return { value: arr[ts] };
      }
  
      const mid = parseInt((ts + te) / 2);
      const left = createMinTree(arr, ts, mid);
      const right = createMinTree(arr, mid + 1, te);
  
      return {
        value: Math.min(left.value, right.value),
        left,
        right,
      };
    };
    const tree = createMinTree(arr, 0, arr.length - 1);
  
    const findMin = (ts, te, rs, re, tree) => {
      if (rs <= ts && te <= re) {
        return tree.value;
      }
  
      if (te < rs || re < ts) {
        return Number.MAX_SAFE_INTEGER;
      }
  
      const mid = parseInt((ts + te) / 2);
      return Math.min(
        findMin(ts, mid, rs, re, tree.left), //
        findMin(mid + 1, te, rs, re, tree.right)
      );
    };
  
    const mins = ranges.map((range) => {
      const [start, end] = range;
      return findMin(0, arr.length - 1, start, end, tree);
    });
    return mins;
  };
  

// solution with segment tree: O(logN) (search only)
// array implementaion
// const rangeMinimum = function (arr, ranges) {
//   const createMinTree = (arr, ts, te, tree, idx) => {
//     if (ts === te) {
//       tree[idx] = arr[ts];
//       return arr[ts];
//     }

//     const mid = Math.floor((ts + te) / 2);
//     tree[idx] = Math.min(
//       createMinTree(arr, ts, mid, tree, idx * 2 + 1), //
//       createMinTree(arr, mid + 1, te, tree, idx * 2 + 2)
//     );

//     return tree[idx];
//   };

//   // 트리 전체의 높이(루트 노트에서 가장 깊은 리프 노드까지의 거리)를 구하고
//   // 전체 배열의 크기를 구한다.
//   const height = Math.ceil(Math.log2(arr.length));
//   const size = Math.pow(2, height + 1) - 1;
//   const tree = Array(size).fill(null);
//   createMinTree(arr, 0, arr.length - 1, tree, 0);

//   const findMin = (ts, te, rs, re, idx) => {
//     if (rs <= ts && te <= re) {
//       return tree[idx];
//     }

//     if (te < rs || re < ts) {
//       return Number.MAX_SAFE_INTEGER;
//     }

//     const mid = parseInt((ts + te) / 2);
//     return Math.min(
//       findMin(ts, mid, rs, re, 2 * idx + 1), //
//       findMin(mid + 1, te, rs, re, 2 * idx + 2)
//     );
//   };

//   const mins = ranges.map((range) => {
//     const [start, end] = range;
//     return findMin(0, arr.length - 1, start, end, 0);
//   });
//   return mins;
// };