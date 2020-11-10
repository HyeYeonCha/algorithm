let commonCharacters = function (str1, str2) {
    // TODO: 여기에 코드를 작성합니다.
    let result = ''; 
    for(let el of str1){
      if(str2.indexOf(el) !== -1 && result.indexOf(el) === -1 ){
        result += el;
      }
    }
    return result;
  };
  

  /*
  return Array.prototype.filter(str1, el => Array.prototype.include(str2, el)).join('');
  */