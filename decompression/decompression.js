const decompression = function (image) {
    // TODO: 여기에 코드를 작성합니다.
    function recur(rs, re, cs, ce, image){
      if(rs === re) return String(image[rs][cs]);
  
      const midRow = parseInt((rs + re)/2);
      const midCol = parseInt((cs + ce)/2);
  
      const leftup = recur(rs, midRow, cs, midCol, image);
      const leftdown = recur(midRow+1, re, cs, midCol, image);
      const rightup = recur(rs, midRow, midCol+1, ce, image);
      const rightdown = recur(midRow+1, re, midCol+1, ce, image);
  
      const result = leftup + rightup + leftdown + rightdown;
  
      if(result === '1111') return `1`;
      else if(result === '0000') return `0`;
      else return `X${result}`;
    }
    return recur(0, image.length-1, 0, image.length-1, image);
  };
  