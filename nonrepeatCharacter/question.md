firstNonRepeatedCharacter
=========================
## 문제

임의의 문자열을 입력받아 문자열 내에서 한 번만 등장하는 문자를 리턴해야 합니다.

## 입력

- `string` 타입의 공백이 없는 문자열

## 출력


- `string` 타입을 리턴해야 합니다.

## 주의사항


- 조건을 만족하는 문자 중 가장 먼저 위치한 문자를 리턴해야 합니다.
- 조건을 만족하는 문자가 없는 경우, null을 리턴해야 합니다.

## 입출력 예시

```javascript
let ouput = firstNonRepeatedCharacter('ABA');
console.log(output); // --> 'B'

output = firstNonRepeatedCharacter('AACBDBC');
console.log(output); // --> 'D'
```
## Advanced
