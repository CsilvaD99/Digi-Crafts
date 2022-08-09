//objects
//const user = {key:value}
let user: {
  name: string;
} = {
  name: "joe",
};
//^^^^^^^this sucks to type
//type alias

type Users = {
  name: string;
  username: string;
  age?: number;
  email?: string;
};
let amanda: Users = {
  name: "Amanda",
  username: "lizardgurl52xd",
  age: 20,
  email: "lizardsrox@gmail.com",
};
let west: Users = {
  name: "West",
  username: "alohaboy",
  email: "btcgod@gmail.com",
};
west.age = 30;

//const object = {[key:string]: any;}
//^^if you dont know the key name before hand

type Carpenter = {
  companyName: string;
  readonly id: number;
};
let carlos: Carpenter = {
  companyName: "abc company",
  id: 1001,
};

let listofcarpenter: Carpenter[] = [];
listofcarpenter.push(carlos);

type Password = {
  password: string | number;
  securityClearance: "Basic" | "Top Secret";
};

type SoftwareEngineer = {
  readonly id: number;
  password: Password;
};
const blke: SoftwareEngineer = {
  id: 12201,
  password: {
    password: 7777,
    securityClearance: "Basic",
  },
};

// type MasterUser = {
//   id: number;
//   password: string;
//   email: string;
//   createdAt: string;
//   updatedAt: string;
// };
// type NormalUser = {
//   id: number;
//   password: string;
//   email: string;
// };

// type listofUsers = {
//   typeofUser: MasterUser | NormalUser;
// };

// let pleb:listofUsers = {
//     typeofUser: MasterUser{
//         id
//     }
// }

type MasterUser = {
  name: string;
  id: number;
  email: string;
};
type Users2 = {
  clearancelevel: string;
};
type Manager = MasterUser & { clearance: string };
