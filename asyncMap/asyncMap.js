const asyncMap = async function (tasks, final) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let count = 0;

  tasks.map((task, index) => {
    task((data) => {
      // task의 콜백으로 들어오는 인자값을 저장
      result[index] = data; // index로 저장해야함 -> 실행순서를 저장하기 위해
      count++;
      if (count === tasks.length) {
        // 인덱스와 tasks의 길이가 같으면 -> 모든 비동기 함수 실행완료
        final(result);
      }
    });
  });
};
