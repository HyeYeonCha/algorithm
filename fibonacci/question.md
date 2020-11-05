fibonacci
=========
## 문제

아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.

0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

## 입력

### 인자 1 : n

- `number` 타입의 n (n은 0 이상의 정수)

## 출력

- `number` 타입을 리턴해야합니다.

## 주의사항


- **fibonacci 함수는 재귀함수 형태**로 작성해야 합니다.

## 입출력 예시

```javascript
let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
```
## Advanced

- 재귀함수의 형태를 유지한 채, 메모이제이션(memoization)을 적용하여 주석으로 처리된 테스트 케이스를 통과해보세요.
