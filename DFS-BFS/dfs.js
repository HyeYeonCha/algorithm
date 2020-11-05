let check = []; // 방문점을 체크하기 위한 배열

// 배열안에 배열구조로 인접 정점을 담기
let stack = [[],[],[],[],[],[],[],[]]; // 스택을 이용한건 아니지만 스택처럼 사용하기 위해 stack으로 선언했다.

function dfsFunction (x){
  if(check[x]){ // 모든 정점을 체크하면 리턴
      return;
  }
  check[x] = true; // 방문 표시
  console.log(x); 

  for(let i=0; i<stack[x].length; i++){
    let y = stack[x][i]; // 인접 정점
    dfsFunction(y); // 재귀 구조로 순회
  }
}

// 1과 2연결 
stack[1].push(2);
stack[2].push(1);

// 1과 3연결
stack[1].push(3);
stack[3].push(1);

// 2와 3연결
stack[2].push(3);
stack[3].push(2);

// 2와 4연결
stack[2].push(4);
stack[4].push(2);

// 2와 5연결
stack[2].push(5);
stack[5].push(2);

// 3과 6연결
stack[3].push(6);
stack[6].push(3);

// 3과 7연결
stack[3].push(7);
stack[7].push(3);

// 4와 5연결
stack[4].push(5);
stack[5].push(4);

// 6과 7연결
stack[6].push(7);
stack[7].push(6);

dfsFunction(1); // 1 2 3 6 7 4 5