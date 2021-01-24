# Two To Add

## 문제

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

## 입력

### 인자 1 : numbers

- 숫자을 요소로 갖는 배열
- `numbers`의 길이는 2 이상 100 이하입니다.
- `numbers`의 모든 수는 0 이상 100 이하입니다.

## 출력

- `array` 타입을 리턴해야 합니다.

## 입출력 예시

```javascript
let arr = [2, 1, 3, 4, 1];
let output = solution(array);
console.log(output); // --> [2,3,4,5,6,7]

string = [5, 0, 2, 7];
output = solution(array);
console.log(output); // --> [2,5,7,9,12]
```
