# Sort String

## 문제

문자열로 구성된 리스트 `strings`와, 정수 `n`이 주어졌을 때, 각 문자열의 인덱스 `n번째 글자`를 기준으로 `오름차순 정렬`하려 합니다. 예를 들어 strings가 `[sun, bed, car]`이고 n이 `1`이면 각 단어의 인덱스 1의 문자 `u`, `e`, `a`로 strings를 `정렬`합니다.

## 입력

### 인자 1 : string

- 배열을 요소로 갖는 배열
- `strings`는 길이 1 이상, 50이하인 배열입니다.
- `strings`의 원소는 소문자 알파벳으로 이루어져 있습니다.
- `strings`의 원소는 길이 1 이상, 100이하인 문자열입니다.
- 모든 `strings`의 원소의 길이는 n보다 큽니다.

### 인자 2 : n

- `n`은 `string`의 원소의 길이보다 작은 숫자

## 출력

- `array` 타입을 리턴해야 합니다.

## 입출력 예시

```javascript
let string = ["sun", "bed", "car"];
let n = 1;
let output = solution(array, n);
console.log(output); // --> ['car', 'bed', 'sun']

string = ["abce", "abcd", "cdx"];
n = 2;
output = solution(array, n);
console.log(output); // --> ['abcd', 'abce', 'cdx']
```

## 힌트

- 입출력 예 1

  `sun`, `bed`, `car`의 `1번째 인덱스 값`은 각각 `u`, `e`, `a` 입니다. 이를 기준으로 `strings`를 정렬하면 `[car, bed, sun]` 입니다.

- 입출력 예 2

  `abce`와 `abcd`, `cdx`의 `2번째 인덱스 값`은 `c`, `c`, `x` 입니다. 따라서 정렬 후에는 `cdx`가 가장 뒤에 위치합니다. `abce`와 `abcd`는 사전순으로 정렬하면 `abcd`가 우선하므로, 답은 `[abcd, abce, cdx]` 입니다.
