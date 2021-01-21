function solution(arr)
{
//     const answer = [arr[0]];
    
//     arr.map(el => {
//         if(answer[answer.length - 1] !== el){
//             answer.push(el);
//         }
//     })
    
//     return answer;
    return arr.filter((el, idx) => el !== arr[idx + 1]);
}