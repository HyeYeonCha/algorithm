function solution(numbers) {
    const answer = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            const sum = numbers[i] + numbers[j];
            if(answer.indexOf(sum) === -1)
             answer.push(sum);
        }
    }
    return answer.sort((a, b) => a - b);
}
