deepEquals
==========
## 문제

두 개의 객체를 입력받아 이 두 객체가 동일한 데이터를 담고 있는지 여부를 리턴해야 합니다.

## 입력

### 인자 1 : obj1

- 임의의 속성을 갖는 객체

### 인자 2 : obj2

- 임의의 속성을 갖는 객체

## 출력

- `boolean`타입을 리턴해야 합니다.

## 주의사항

- 입력으로 주어지는 객체는 `object literal`* 또는 `object initializer`만을 의미합니다.
- object literal: 중괄호({, })와 콤마(,)를 사용하여 정의된 key-value store (MDN 참고) https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
- 객체의 속성은 `object literal`, `number`, `string`, `boolean`, `undefined`, `null` 중 하나입니다.

- 순환객체는 고려하지 않습니다.
- 두 객체의 키(key)와 속성(property)이 전부 일치한 경우에만 `true`를 리턴해야 합니다.


## 입출력 예시

```javascript
let output = deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } });
console.log(output); // --> true

output = deepEquals({ a: 1, b: { c: 5 } }, { a: 1, b: { c: 6 } });
console.log(output); // --> false

output = deepEquals({ a: 1, b: 5 }, { a: 1, b: '5' });
console.log(output); // --> false
```

## Advanced

