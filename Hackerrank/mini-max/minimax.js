function miniMaxSum(arr) {
  // Write your code here
  let maxArr = [...arr].sort(function (a, b) {
    return b - a;
  });
  maxArr.pop();
  let max = maxArr.reduce((a, b) => a + b, 0);
  let minArr = [...arr].sort(function (a, b) {
    return a - b;
  });
  minArr.pop();
  let min = minArr.reduce((a, b) => a + b, 0);
  console.log(min, max);
  return;
}
//100% Solved
