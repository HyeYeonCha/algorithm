function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;
  for (let el of d) {
    if (budget - el >= 0) {
      budget -= el;
      count++;
    } else {
      break;
    }
  }
  return count;
}
