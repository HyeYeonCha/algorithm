const LSCS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  let dp = [];
  let answer = 0;

  dp[0] = arr[0];
  answer = dp[0];

  let max = (a, b) => (a > b ? a : b);

  for (let i = 1; i < arr.length; i++) {
    dp[i] = max(dp[i - 1] + arr[i], arr[i]);
    answer = max(dp[i], answer);
  }
  return answer;
};
