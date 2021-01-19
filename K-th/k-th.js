function solution(array, commands) {
    let answer = [];
    if(array.length <= 1) return array;
    for(let command of commands){
        let temp = array.slice(command[0]-1, command[1]);
        temp.sort((b,c)=> b-c);
        answer.push(temp[command[2]-1]);
    }
    return answer;
}