function plusMinus(arr) {
  // Write your code here
  let outarr = [0, 0, 0];
  let arrLength = arr.length;
  arr.forEach((num) => {
    if (num > 0) {
      outarr[0] += 1;
    } else if (num < 0) {
      outarr[1] += 1;
    } else {
      outarr[2] += 1;
    }
  });
  let positive = outarr[0] / arrLength;
  let negative = outarr[1] / arrLength;
  let zero = outarr[2] / arrLength;
  console.log(positive.toFixed(6)),
    console.log(negative.toFixed(6)),
    console.log(zero.toFixed(6));
  return;
}
//100% solved
