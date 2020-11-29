lps
====

## 문제

문자열을 입력받아 다음의 조건을 만족하는 가장 긴 lps*를 찾아 그 길이를 리턴해야 합니다.

- `lps`: 주어진 문자열의 가장 긴 접두어이자 접미어(longest prefix which is also suffix)
- non-overlapping: 접두어와 접미어는 서로 겹치는 부분이 없어야 합니다. 다시 말해, prefix와 suffix는 문자열의 동일한 인덱스에 위치한 문자를 요소로 가지면 안 됩니다.

## 입력

### 인자 1 : str

- `string` 타입의 임의의 알파벳 소문자 문자열 (`str.length <= 5,000,000`)

## 출력

- `number` 타입을 리턴해야 합니다.

## 주의사항

- prefix(접두어)는 문자열의 첫 인덱스부터 시작하는 모든 부분 문자열을 의미합니다.
- suffix(접미어)는 문자열의 마지막 인덱스부터 시작하는 모든 부분 문자열을 의미합니다.


## 입출력 예시

```javascript
let output = lps('abbbcc');
console.log(output); // --> 0

output = lps('aaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(2)
// non-overlapping 조건이 없는 경우 정답은 4 입니다.

output = lps('aaaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(3)
// non-overlapping 조건이 없는 경우 정답은 5 입니다.
```

## Advanced

- lps를 계산하는 효율적인 알고리즘(O(N))이 존재합니다. 쉽지 않기 때문에 바로 레퍼런스 코드를 보고 이해하는 데 집중하시기 바랍니다.
- 정규식(regular expression)을 활용하면 아래처럼 간단하게 구현할 수 있습니다. 정규식에 대해서 학습하시기 바랍니다. (참고사이트: https://regexr.com/)

```javascript
const lps = (str) => {
  const result = str.match(/^(\w*).*\1$/);
  return result[1].length;
};
```
