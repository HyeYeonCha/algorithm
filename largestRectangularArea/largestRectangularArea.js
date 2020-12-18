const largestRectangularArea = function (histogram) {
    // TODO: 여기에 코드를 작성합니다.
    const createMinIdxTree = (arr, ts, te) => {
      if (ts === te) return { idx: ts, val: arr[ts] };
  
      const mid = parseInt((ts + te) / 2);
      const left = createMinIdxTree(arr, ts, mid);
      const right = createMinIdxTree(arr, mid + 1, te);
  
      return {
        val: Math.min(left.val, right.val),
        idx: left.val < right.val ? left.idx : right.idx,
        left,
        right,
      };
    };
    const tree = createMinIdxTree(histogram, 0, histogram.length - 1);
  
    const getMinIdx = (ts, te, rs, re, tree) => {
      if (rs <= ts && te <= re) return tree.idx;
      if (te < rs || re < ts) return rs;
  
      const mid = parseInt((ts + te) / 2);
      const left = getMinIdx(ts, mid, rs, re, tree.left);
      const right = getMinIdx(mid + 1, te, rs, re, tree.right);
      return histogram[left] < histogram[right] ? left : right;
    };
  
    const getRangeArea = (start, end) => {
      if (start > end) return 0;
      const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);
  
      return Math.max(
        (end - start + 1) * histogram[minIdx], 
        getRangeArea(start, minIdx - 1),
        getRangeArea(minIdx + 1, end)
      );
    };
  
    return getRangeArea(0, histogram.length - 1);
  };
  