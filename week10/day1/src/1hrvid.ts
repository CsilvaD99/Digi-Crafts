let sales: number = 123456789;
let course: string = "typescript";
let is_published: boolean = true;
let level;
let numbers: number[] = [1, 2, 3];

//q, "mosh"
let usertuple: [number, string] = [1, "mosh"];
usertuple[1];

usertuple.push(1);

//enum
const small = 1;
const meduim = 2;
const larger = 3;

enum Size {
  small = 1,
  Medium,
  Large,
}
let mysize: Size = Size.Medium;
console.log(mysize);
// const enum compiles a more optimised code

//funcitons
function calculateTax(income: number, taxYear?: number): number {
  income = 5;
  taxYear = 4;
  return income;
}
type Employeees = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
//object
let emplyeees: Employeees = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

//union types
function kgtolbs(weight: number | string): number {
  //narowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
//intersection
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;
let texbox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//literal (exact,specific)
type Quantity = 100 | 150;
let quentity: Quantity = 100;

function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("hola");
}
greet(null);

//optional chaining
type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
//optional element access operator

// customer?. [0]

//optional call
let log: any = null;
