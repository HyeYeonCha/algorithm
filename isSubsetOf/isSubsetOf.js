const isSubsetOf = function (base, sample) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 0;
    for(let bEl of base){
      for(let sEl of sample){
        if(sEl === bEl)
          count++;
      }
    }
  
    if(count === sample.length)
      return true;
    return false;
  };
  