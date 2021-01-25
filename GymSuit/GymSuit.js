function solution(n, lost, reserve) {
    let answer = n;
    const newLost = lost.filter(el => !reserve.includes(el));
    const newReserve = reserve.filter(el => !lost.includes(el));
    
    for(let el of newLost){
        const preIdx = newReserve.indexOf(el - 1);
        const backIdx = newReserve.indexOf(el + 1);
        
        if(preIdx !== -1){
            newReserve.splice(preIdx, 1);
        }else if(backIdx !== -1){
            newReserve.splice(backIdx, 1);
        }else {
            answer -= 1;
        }
    }
    
    return answer;
}
