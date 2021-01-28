function solution(x) {
  let stringX = x + "";
  let xSum = Array.from(stringX).reduce((acc, cur) => acc + parseInt(cur), 0);
  return x % xSum === 0 ? true : false;
}
