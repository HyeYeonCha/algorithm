// dfs
/*
let countLeaves = function (root) {
  // TODO: 여기에 코드를 작성합니다.
  let count = 0;
  function dfs(node){
    if(node.children.length > 0){
      for(let item of node.children){
        dfs(item);
      }
    }else{
      count++;
      return;
    }
  }
  dfs(root);
  return count;
};
*/

// bfs
let countLeaves = function (root) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 0;
    let arr = [root];
    while(arr.length > 0){
      let x = arr[0];
      arr.splice(0, 1);
      if(x.children.length > 0){
        for(let item of x.children){
          arr.push(item);
        }
      }else{
        count++;
      }
    }
  
    return count;
  };
  
  // 간단 풀이
  /*
  let countLeaves = function (root) {
    // TODO: 여기에 코드를 작성합니다.
    if (root.children.length === 0) return 1;
  
    let sum = 0;
    for (let i = 0; i < root.children.length; i++) {
      sum = sum + countLeaves(root.children[i]);
    }
    return sum;
  };
  */
  
  // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
  let Node = function (value) {
    this.value = value;
    this.children = [];
  };
  
  // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
  // membership check(중복 확인)를 따로 하지 않습니다.
  Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
  };
  