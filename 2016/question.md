# 2016

## 문제

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 `SUN,MON,TUE,WED,THU,FRI,SAT` 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

## 입력

### 인자 1 : a

- `number`타입으로 주어지는 달

### 인자 2 : b

- `number`타입으로 주어지는 일

## 출력

- `string` 타입을 리턴해야 합니다.

## 주의 사항

- `2016년`은 `윤년`입니다.
- `2016년` a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

## 입출력 예시

```javascript
let a = 5;
let b = 24;
let output = solution(a, b);
console.log(output); // --> "THE"
```
