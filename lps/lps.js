const lps = function (str) {
  // TODO: 여기에 코드를 작성합니다.

  // str의 길이
  let len = str.length;
  // 길이가 1이하면 찾을 수 없으니 바로 0리턴
  if (len < 2) {
    return 0;
  }
  // 답이 될 인덱스 변수
  let answer = 0;
  // 중간점부터 시작할 인덱스 변수
  let index = parseInt((len + 1) / 2);

  // 반으로 나눈 배열의 인덱스가 전체 인덱스보다 작을때까지 반복
  while (index < len) {
    if (str[index] === str[answer]) {
      answer++;
      index++;
    } else {
      if (answer === 0) index++;
      else answer--;
    }
  }

  return answer;
};
