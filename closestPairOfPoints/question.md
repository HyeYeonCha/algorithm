# closestPairOfPoints

## 문제

좌표평면 상의 다양한 점들을 입력받아 가장 가까운 두 점 사이의 거리를 리턴해야 합니다.

## 입력

### 인자 1 : points

- 배열을 요소로 갖는 배열
- `points.length`는 20,000 이하
- `points[i]`는 `number` 타입을 요소로 갖는 배열
- `points[i].length`는 2
- `points[i]`의 요소는 차례대로 좌표평면 위의 y좌표, x좌표
- `points[i][j]`는 0 이상 10,000 이하의 정수

## 출력

- `number` 타입을 리턴해야 합니다.

## 주의사항

- `points`는 y좌표나 x좌표 등으로 정렬되어 있지 않습니다.
- 두 점 사이의 거리를 계산하는 함수 `calculateDistance`가 주어집니다. 두 점 간 거리는 **반드시** 이 함수를 이용해서 계산해야 합니다.
- 함수 `calculateDistance`는 소수점 계산을 피하기 위해 두 점 사이의 거리에 100을 곱한 후 정수 부분만 취합니다. 최단 거리도 이 기준으로 판단합니다.

## 입출력 예시

```javascript
let points = [
  [0, 0],
  [1, 3],
  [2, 2],
];
let output = closestPairOfPoints(points);
console.log(output); // --> 141 ([1, 3], [2, 2])
/*
3 | 
2 |     x
1 |       x
0 | x 
------------
    0 1 2 3 
*/

points = [
  [0, 0],
  [0, 1],
  [0, 3],
  [0, 5],
];
output = closestPairOfPoints(points);
console.log(output); // --> 100 ([0, 0], [0, 1])
/*
5 | x
4 | 
3 | x
2 |     
1 | x     
0 | x 
------------
    0 1 2 3 
*/
```

## Advanced

- 가장 가까운 두 점 사이의 거리를 구하는 효율적인 알고리즘(`O(N * logN)`)이 존재합니다.

## 힌트

- 효율적인 알고리즘은 병합 정렬(`merge sort`)과 비슷하게 분할 정복(`divide and conquer`) 알고리즘을 사용해야 합니다. 어떻게 나눠야 할 지, 나누었을 때 놓치는 부분은 없는 지 유의하면서 고민해 보시기 바랍니다.
