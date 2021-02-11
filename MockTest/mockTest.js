function solution(answers) {
  const answer = [];
  const sufo1 = [1, 2, 3, 4, 5];
  const sufo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const sufo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  function getAnswer(sufo, sufoLength) {
    return answers.filter((el, idx) => el === sufo[idx % sufoLength]).length;
  }

  const sufo1Answer = getAnswer(sufo1, sufo1.length);
  const sufo2Answer = getAnswer(sufo2, sufo2.length);
  const sufo3Answer = getAnswer(sufo3, sufo3.length);

  const maxAnswer = Math.max(sufo1Answer, sufo2Answer, sufo3Answer);

  if (maxAnswer === sufo1Answer) {
    answer.push(1);
  }
  if (maxAnswer === sufo2Answer) {
    answer.push(2);
  }
  if (maxAnswer === sufo3Answer) {
    answer.push(3);
  }

  return answer;
}
