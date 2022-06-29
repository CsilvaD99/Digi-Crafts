console.log("howdy");

//ternary operator?
// const data = iftruthy? do this : do this if falsy

// select the elemts that you need to either attach things to or check

const dropdown = document.getElementById("animal-farm");
console.log(dropdown.children[0].value);
const pig = dropdown.children[0].value;
if (pig === "pig") {
  console.log("oink oink");
}

const animalChoice = () => {
  console.log("im a function");
};
// select,
