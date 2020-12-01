# asyncMap

## 문제

- 비동기 함수들을 요소로 갖는 배열(tasks)과 함수(final)를 입력받아 아래와 같은 동작을 하는 함수를 구현해야 합니다.
- 비동기 함수들을 차례대로 실행하고, 비동기 함수의 콜백함수에 전달되는 인자를 비동기 함수의 실행 순서대로 저장합니다.
- 모든 결과가 저장되면, 전체 결과를 final 함수에 적용(apply)합니다.

## 입력

### 인자 1 : tasks

- `function` 타입을 요소로 갖는 배열
- `tasks[i]`는 비동기 함수

### 인자 2 : final

- `function` 타입의 함수

## 출력

- `final`의 리턴을 따릅니다.

## 주의사항

- `tasks`의 각 비동기 함수들은 엄밀한 의미에서 비동기 함수는 아니며, 비동기 오퍼레이션을 포함하고 있는 함수입니다.
- `final`은 입력으로 주어지므로 출력의 형태는 신경쓰지 않아도 됩니다.
- `tasks`의 각 비동기 함수들은 콜백함수를 인자로 받아, 비동기 오퍼레이션이 완료될 때 호출합니다.
- `final` 함수는 `tasks`의 각 비동기 함수의 콜백에 전달된 결과들을 비동기 함수의 실행 순서대로 담은 - 배열을 인자로 받아 실행되어야 합니다.
- 비동기 함수들의 실행 순서와 완료 순서는 서로 다를 수 있습니다.
- `Promise.all` 사용은 금지됩니다.

## 입출력 예시

```javascript
asyncMap(
  [
    function (cb) {
      setTimeout(function () {
        cb("one");
      }, 200);
    },
    function (cb) {
      setTimeout(function () {
        cb("two");
      }, 100);
    },
  ],
  function (results) {
    console.log(results); // --> ['one', 'two']
  }
);
```

## Hint

- 이 문제는 `Promise.all`로 아래와 같이 쉽게 해결할 수 있습니다. 즉, 여러분들이 구현한 코드와 아래 코드의 결과는 같아야 합니다. 직접 실행하고 결과를 비교해 보시기 바랍니다.

```javascript
function asyncMap(tasks, final) {
  const promises = tasks.map((task) => new Promise(task));
  return Promise.all(promises).then((results) => final(results));
}
```
