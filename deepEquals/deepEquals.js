const deepEquals = function (obj1, obj2) {
    // TODO: 여기에 코드를 작성합니다.
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key) && obj2[key] === obj1[key]) {
      continue;
    } else if (obj2.hasOwnProperty(key) && typeof obj1[key] === 'object') {
      if (deepEquals(obj1[key], obj2[key])) {
          continue;
      }
      return false;
    }
    return false;
  }
  return true;
};


/* every 이용
const deepEquals = function (obj1, obj2) {
  // base case
  // when inputs are primitive types
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  // recursive case
  // when inputs are objects
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  return obj1Keys.every((key) => deepEquals(obj1[key], obj2[key]));
};
*/