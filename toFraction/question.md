# toFraction

## 문제

수를 입력받아 해당 수와 동일한 값을 나타내는 분수를 문자열 형태로 리턴해야 합니다.

## 입력

### 인자 1 : num

- `number` 타입의 정수 또는 유한소수(finite decimal)
- 유한소수는 소수점 아래에 0이 아닌 숫자가 유한개인 소수

## 출력

- `string` 타입을 리턴해야 합니다.
- 입력받은 수를 `'분자/분모'`형태로 변형해야 합니다.

## 주의사항

- 출력값은 가분수(분자가 분모보다 큰 경우만 인정) 문자열일 수 있습니다.
- 출력값이 가분수 문자열일 경우, 기약분수 형태여야 합니다.

## 입출력 예시

```javascript
let output = toFraction(0.5);
console.log(output); // --> 1/2

output = toFraction(3);
console.log(output); // --> 3/1

output = toFraction(2.5);
console.log(output); // --> 5/2
```

## Advanced
