// 처음 풀이
function check(skillIdxArr) {
    let answer = 0;
    answer++;
    for (let i = 0; i < skillIdxArr.length; i++) {
      if (skillIdxArr[i] > skillIdxArr[i + 1]) {
        if (skillIdxArr[i + 1] === -1) {
          if (
            skillIdxArr.slice(i).filter((skill) => skill === -1).length ===
            skillIdxArr.length - i - 1
          )
            break;
        }
        answer--;
        break;
      }
    }
  
    return answer;
  }
  
  function solution(skill, skill_trees) {
    let answer = 0;
    skill_trees.map((el) => {
      let skillIdxArr = [];
      for (let item of skill) {
        skillIdxArr.push(el.indexOf(item));
      }
      answer++;
  
      for (let i = 0; i < skillIdxArr.length; i++) {
        if (skillIdxArr[i] !== -1) {
          if (check(skillIdxArr.slice(i)) === 1) {
            break;
          } else {
            answer--;
            break;
          }
        } else {
          if (skillIdxArr[i + 1] !== -1 && i !== skillIdxArr.length - 1) {
            answer--;
            break;
          }
        }
      }
    });
    return answer;
  }
  
  // 리펙터링
  function solution(skill, skill_trees) {
    function check(skill_tree) {
      let skillArr = skill.split("");
      let treeArr = skill_tree.split("");
      for (let el of treeArr) {
        if (!skillArr.includes(el)) continue;
        if (skillArr.shift() !== el) return false;
      }
      return true;
    }
  
    return skill_trees.filter((el) => check(el)).length;
  }
  