function solution(progresses, speeds) {
  const answer = [0];
  const days = [];

  progresses.map((progresse, idx) => {
    days.push(Math.ceil((100 - progresse) / speeds[idx]));
  });

  // O^2
  //     while(days.length > 0){
  //         let count = 0;
  //         let cur = days[0];

  //         for(let day of days){
  //             if(cur >= day){
  //                 count++;
  //             }else break;
  //         }

  //         answer.push(count);
  //         days.splice(0, count);
  //     }

  let max = days[0];
  for (let i = 0, j = 0; i < days.length; i++) {
    if (max >= days[i]) {
      answer[j] += 1;
    } else {
      max = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
