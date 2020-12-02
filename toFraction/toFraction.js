const toFraction = function (num) {
    // TODO: 여기에 코드를 작성합니다.
    if(parseInt(num) === num){
      return `${num}/1`;
    }
    let negative = num < 0;
    if(negative)
    num *= -1;
    let bunjaArr = '' + num;
  
    bunjaArr = bunjaArr.split('.');
    // let bunja = bunjaArr[0] === 0 ? parseInt(bunjaArr[1]) : parseInt(bunjaArr[0] + bunjaArr[1]);
    let bunmo = Math.pow(10, bunjaArr[1].length);
    let bunja = parseInt(num * bunmo);
  
    let divide, i, j;
  
    i = bunja;
    j = bunmo;
    
    while(j !== 0){
      let tem = j;
      j = i % j;
      i = tem;
    }
    divide = i;
  
    return `${negative ? '-':''}${bunja/divide}/${bunmo/divide}`
  };
  