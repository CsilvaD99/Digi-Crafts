console.log(document);
const newlist = [];
const Submit = document.getElementById("Submit");
const Input = document.getElementById("Input");
const lists = document.getElementsByTagName("lists");
const container = document.getElementById("container");

const newitem = () => {
  const item = document.getElementById("Input").value;
  const h1 = document.createElement("h1");
  h1.innerText = item;
  container.append(h1);
  console.log(h1);
  console.log("hi");
};

Submit.onclick = newitem;
