# Harshad Number

## 문제

양의 정수 x가 `하샤드 수`이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

## 입력

### 인자 1 : x

- `number`타입의 1 이상, 10000 이하인 정수

## 출력

- `boolean` 타입을 리턴해야 합니다.

## 입출력 예시

```javascript
let x = 10;
let output = solution(a);
console.log(output); // --> true

let x = 12;
let output = solution(a);
console.log(output); // --> true

let x = 11;
let output = solution(a);
console.log(output); // --> false

let x = 13;
let output = solution(a);
console.log(output); // --> false
```

## 힌트

1. 입출력 예 #1

- 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

2. 입출력 예 #2

- 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

3. 입출력 예 #3

- 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

4. 입출력 예 #4

- 13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.
