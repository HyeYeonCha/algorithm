# The LargestNumber

## 문제

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 `[6, 10, 2]`라면 `[6102, 6210, 1062, 1026, 2610, 2106]`를 만들 수 있고, 이중 가장 큰 수는 `6210`입니다.

0 또는 양의 정수가 담긴 배열 `numbers`가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

## 입력

### 인자 1 : numbers

- `numbers`의 길이는 1 이상 100,000 이하입니다.
- `numbers`의 원소는 0 이상 1,000 이하입니다.

## 출력

- `String` 타입을 리턴해야 합니다.

## 제한조건

- 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

## 입출력 예시

```javascript
let numbers = [6, 10, 2];
let output = solution(numbers);
console.log(output); // --> "6210"

numbers = [3, 30, 34, 5, 9];
output = solution(numbers);
console.log(output); // --> "9534330"
```
