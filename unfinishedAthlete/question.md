# unfinished Athlete

## 문제

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 `participant`와 완주한 선수들의 이름이 담긴 배열 `completion`이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

## 입력

### 인자 1 : participant

- `string`으로 이루어진 배열
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.

### 인자 2 : completion

- `string`으로 이루어진 배열
- `completion`의 길이는 `participant`의 길이보다 1 작습니다.

## 출력

- `string` 타입을 리턴해야 합니다.

## 주의 사항

- 참가자 중에는 동명이인이 있을 수 있습니다.

## 입출력 예시

```javascript
let participant = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];
let output = solution(participant, completion);
console.log(output); // --> "leo"

participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
completion = ["josipa", "filipa", "marina", "nikola"];
output = solution(participant, completion);
console.log(output); // --> "vinko"

participant = ["mislav", "stanko", "mislav", "ana"];
completion = ["stanko", "ana", "mislav"];
output = solution(participant, completion);
console.log(output); // --> "mislav"
```

## 힌트

1. 예제 #1

- `leo`는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

2. 예제 #2

- `vinko`는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

3. 예제 #3

- `mislav`는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
