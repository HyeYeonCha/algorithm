const rockPaperScissors = function () {
  // TODO: 여기에 코드를 작성합니다.
  let arr = ['rock', 'paper', 'scissors'];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        let tem = [arr[i], arr[j], arr[k]];
        result.push(tem);
      }
    }
  }
  return result;
};



/*
Advanced
const rockPaperScissors = function (round) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = ['rock', 'paper', 'scissors'];
  let results = [];

  round = round || 3;

  function checkRound(result, _round) {
    if (round === _round) {
      results.push(result)
    } else {
      for (let el of arr) {
        checkRound(result.concat(el), _round + 1)
      }
    }

  }

  checkRound([], 0);
  return results;
};

*/