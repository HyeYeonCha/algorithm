treeDFSelect
============
## 문제

임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

## 입력

### 인자 1 : node

- `value`, `children` 속성을 갖는 객체 (Node)
- `node.value`는 `number` 타입
- `node.children`은 Node를 요소로 갖는 배열


## 출력

- 배열을 리턴해야 합니다.

## 주의사항


- `Tree` 의 각 node는 전달받은 필터링 함수를 깊이 우선 방식으로 호출합니다.
- 매개변수로 전달받은 필터링 함수를 만족하는 `Tree`의 `node`들을 1차원 배열로 반환합니다.
- 필터링 함수는 형식이 정해져 있지 않습니다.
- 깊이에 따른 필터링이 가능해야 합니다.

## 입출력 예시

```javascript
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = root.dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]
```
## Advanced

