const toFraction = function (num) {
  // TODO: 여기에 코드를 작성합니다.
  if (parseInt(num) === num) {
    return `${num}/1`;
  }
  let negative = num < 0;
  if (negative) num *= -1;
  let bunjaArr = "" + num;

  bunjaArr = bunjaArr.split(".");
  // let bunja = bunjaArr[0] === 0 ? parseInt(bunjaArr[1]) : parseInt(bunjaArr[0] + bunjaArr[1]);
  let bunmo = Math.pow(10, bunjaArr[1].length);
  let bunja = parseInt(num * bunmo);

  // const gcd = (num1, num2) => {
  //   if (num2 == 0) {
  //     return num1;
  //   } else {
  //     return gcd(num2, num1 % num2);
  //   }
  // };
  let divide, i, j;

  i = bunja;
  j = bunmo;

  while (i !== 0) {
    let tem = i;
    i = j % i;
    j = tem;
  }
  divide = j;

  return `${negative ? "-" : ""}${bunja / divide}/${bunmo / divide}`;
};
