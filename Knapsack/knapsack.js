const knapsack = function (weight, items) {
    // TODO: 여기에 코드를 작성합니다.
    let dp = Array(items.length+1);
    for(let i=0; i<dp.length; i++) dp[i] = Array(weight+1).fill(0);
    
    for(let i =1; i<=items.length; i++){
      for(let j=1; j<=weight; j++){
        dp[i][j] = dp[i-1][j]; // 안가져감
        if(j - items[i-1][0] >= 0){
          dp[i][j] = Math.max(dp[i][j], dp[i-1][j - items[i-1][0]] + items[i-1][1]);
        }
      }
    }
    return dp[items.length][weight];
  };
  