var removeElement = function (nums, val) {
  var n = nums.length;
  var i = 0;
  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }

  return n;
};

let nums = [3, 2, 2, 3];
var k = removeElement(nums, 3);
console.log(k);
