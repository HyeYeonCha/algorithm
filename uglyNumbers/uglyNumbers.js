const uglyNumbers = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    // let maxDiv = (a, b) => {
    //   while(a%b === 0) a = a/b;
    //   return a;
    // }
    // let isAgly = (num) => {
    //   num = maxDiv(num, 2);
    //   num = maxDiv(num, 3);
    //   num = maxDiv(num, 5);
    //   return num === 1 ? 1:0;
    // }
    // let getAgly = n => {
    //   let i =1;
    //   let ugly = 1;
    //   while (n > ugly) {
    //     i++;
    //     if(isAgly(i))
    //       ugly++;
    //   }
    //   return i;
    // }
    // return getAgly(n);
  
    let uglyNum = [1];
    let idx1 =0, idx2 =0, idx3 =0;
  
    for(let i=0; i<n; i++){
      const nextNumOfTwo = uglyNum[idx1] * 2;
      const nextNumOfThree = uglyNum[idx2] * 3;
      const nextNumOfFive = uglyNum[idx3] * 5;
  
      const nextNum = Math.min(nextNumOfTwo, nextNumOfThree, nextNumOfFive);
  
      if(nextNum === nextNumOfTwo) idx1++;
      if(nextNum === nextNumOfThree) idx2++;
      if(nextNum === nextNumOfFive) idx3++;
  
      uglyNum.push(nextNum);
    }
  
    return uglyNum[n-1];
  };
  