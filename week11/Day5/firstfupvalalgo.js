Array = [2, 1, 5, 2, 3, 3, 4];
// Array = [1,2,3,4,5,6,7]
// Array =[2,1,5,3,3,2,4]
// Array = [1,1,2,3,3,2,2]
console.log("hi");
const check = (numbers) => {
  let set = new Set(numbers).size !== numbers.length;
  if (set === false) {
    return -1;
  }
  if (set === true) {
    for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index];

      //   if (numbers.includes(element)) {
      //     console.log("oof", );
      //   }
    }

    // numbers.filter((item) => {
    //   if (set.has(item)) {
    //     console.log(item);
    //   }
    // });
  }
};
check(Array);
