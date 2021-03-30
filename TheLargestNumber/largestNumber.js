function solution(numbers) {
  numbers.sort((a, b) => {
    if ("" + a + b > "" + b + a) return -1;
    else return 1;
  });
  if (numbers[0] > 0)
    return numbers.reduce((acc, cur) => {
      return acc + cur;
    }, "");
  else return "0";
}
