const BlueBack = document.getElementById("Blueb");
const RedBack = document.getElementById("Redb");
const RedShirts = [5, 8, 1, 3, 4];
const BlueShirts = [6, 9, 2, 4, 5];

// const SortRed = (RedShirts) => {
//     RedShirts.sort((a, b) => a - b);
//     console.log(RedShirts);
// }

const SortSize = (RedShirts, BlueShirts) => {
  RedShirts.sort((a, b) => a - b);
  BlueShirts.sort((a, b) => a - b);
  console.log(RedShirts);
  console.log(BlueShirts);
};
console.log(1 + "2");

SortSize();
