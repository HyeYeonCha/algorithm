const balancedBrackets = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let stack = [];
    let open = {
      '(': ')',
      '{': '}',
      '[': ']',
    }
    let close = ')}]';
    for(let el of str){
      if(el in open){
        stack.push(el);
      }else if (close.includes(el)){
        let top = stack.pop();
        if(open[top] !== el)
          return false;
      }
    }
    return stack.length === 0;
  };
  