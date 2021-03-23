// 효율성 전부 통과 X (이중 반복문이라 너무 커짐)
// function solution(people, limit) {
//     let answer = 0;

//     for(let i=0; i<people.length; i++){
//         if(people[i] + 40 <= limit){
//             let max = people[i];
//             let maxIdx = i;
//             for(let j=i+1; j<people.length; j++){
//                 let tem = people[i] + people[j];
//                 if(max < tem && tem <= limit){
//                     max = tem;
//                     maxIdx = j;
//                 }
//             }
//             if(maxIdx !== i){
//                 people.splice(maxIdx, 1);
//             }
//             answer++;

//         }else {
//             answer++;
//         }
//     }

//     return answer;
// }

// 직접 splice해주면 느려져서 index로 접근
function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => {
    if (a > b) return -1;
    else return 1;
  });
  let left = 0;
  let right = people.length - 1;
  while (left < right) {
    if (people[left] + people[right] <= limit) {
      right--;
    }
    left++;
    answer++;

    if (left === right) {
      answer += 1;
      break;
    }
  }

  return answer;
}
