treeCountLeaves
================
## 문제

임의의 tree를 구성하는 루트 노드(root node) 입력받아 리프 노드(leaf node)의 개수를 리턴해야 합니다.

## 입력

### 인자 1 : root

- `'value'`, `'children'` 속성을 갖는 객체 (Node)
- `'node.value'`는 `number` 타입
- `'node.children'`은 Node를 요소로 갖는 배열


## 출력

- `number`타입을 리턴해야 합니다.

## 주의사항

- 생성자 함수(`Node`)와 메소드(`addChild`)는 변경하지 않아야 합니다.


## 입출력 예시

```javascript
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = countLeaves(root);
console.log(output); // --> 2

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = countLeaves(root);
console.log(output); // --> 2
```

## Advanced
- 
