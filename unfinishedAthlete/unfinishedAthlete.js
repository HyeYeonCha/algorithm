function solution(participant, completion) {
  let obj = {};
  for (let el of participant) {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;
  }

  for (let el of completion) {
    obj[el]--;
  }

  for (let el in obj) {
    if (obj[el] === 1) return el;
  }
}
