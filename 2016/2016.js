function solution(a, b) {
    // 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    const cal = {};
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    
    for(let i=1; i<=12; i++){
        let tem;
        if(i===1 || i===3 || i===5 || i===7 || i===8 || i===10 || i===12){
            tem = Array(32);
        }else if(i===2){
            tem = Array(30);
        }else {
            tem = Array(31);
        }
        cal[i] = tem;
    }
   
    let lastDay = 4;
    for(let month in cal){
        lastDay < 6 ? lastDay++ : lastDay = 0;
        cal[month][1] = lastDay; // 요일의 인덱스
        for(let i=2; i<cal[month].length; i++){
            lastDay < 6 ? lastDay++ : lastDay = 0;
            cal[month][i] = lastDay;
        }
    }
    
    return week[cal[a][b]];
}