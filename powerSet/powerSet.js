const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = Array.from(new Set(str));
    arr.sort();
    let answer = [];
  
    function recur (depth, sub){
      if(depth === arr.length){
        answer.push(sub);
        return;
      }
  
      recur(depth + 1, sub);
  
      recur(depth + 1, sub + arr[depth]);
  
    }
  
    recur(0, '');  
    
    return answer.sort();
  };
  