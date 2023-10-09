//Exercise 1: filterByValue
function filterByValue(objArr, key) {
  let valArr = objArr.filter(function (obj) {
    return obj[key];
  });
  return valArr;
}

//Exercise 2: find
function find(arr, num) {
  let findVal = arr.filter(function (val) {
    if (val === num) {
      return num;
    }
  });
  return findVal[0];
}

//Exercise 3: findInObj
function findInObj(objArr, key, value) {
  let findObj = objArr.filter(function (obj) {
    if (obj[key] === value) {
      return obj;
    }
  });
  return findObj[0];
}

//Exercise 4: removeVowels
function removeVowels(str) {
  str = str.toLowerCase();
  strArr = str.split("");
  let finArr = [];
  const vowelStr = "aeiou";
  let noVowels = strArr.filter(function (letter, i) {
    if (vowelStr.indexOf(letter) === -1) {
      return finArr.push(letter);
    }
  });
  return noVowels.join("");
}

//Exercise 5: doubleOddNumbers
function doubleOddNumbers(arr) {
  let oddArr = arr.filter(function (nums) {
    if (nums % 2 !== 0) {
      return nums;
    }
  });
  let doubOddArr = oddArr.map(function (nums) {
    return nums * 2;
  });
  return doubOddArr;
}
