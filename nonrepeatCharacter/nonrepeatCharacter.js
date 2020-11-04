const firstNonRepeatedCharacter = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let obj = {};
    for(let el of str){
      if(el in obj){
        obj[el] ++;
      }else{
        obj[el] = 1;
      }
    }
  
    for(let key in obj){
      if(obj[key] === 1){
        return key;
      }
    }
  
    return null;
  };
  