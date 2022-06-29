console.log(document);
const button1 = parseInt(document.getElementById("button1").innerText);

const button2 = parseInt(document.getElementById("button2").innerText);

const addition = document.getElementById("addition");
addition.addEventListener("click", () => console.log("Hiii"));

const buttons = document.getElementsByTagName("button");
console.log(button1);
for (const button of buttons) {
  console.log(button.innertext);
}
