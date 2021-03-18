function solution(citations) {
  citations.sort((a, b) => {
    if (a > b) return -1;
    else return 1;
  });
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) return i;
  }

  return citations.length;
}
