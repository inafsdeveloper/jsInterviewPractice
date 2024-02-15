export const permuteString = (s) => {
  if (s.length === 1) {
    return [s];
  }

  let list = [];

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    let str = s.substring(0, i) + (i === s.length ? "" : s.substring(i + 1));
    let subList = permuteString(str);

    for (let j = 0; j < subList.length; j++) {
      list.push(c + subList[j]);
    }
  }

  return list;
};

let result = permuteString("abc");
console.log(result);
