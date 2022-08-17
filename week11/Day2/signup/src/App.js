import "./App.css";
import { useState } from "react";

function App() {
  const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formInfo, setFormInfo] = useState({ emptyForm });
  const validateInput = (text,name) =>{
  switch ((name)) {
    case "firstName":
      let firstNameReg = /^.{5,}$/;
      setFormInfo({ ...formInfo, [name]: text });
      break;
    case "lastName":
      let lastNameReg = /^.{5,}$/;
      setFormInfo({ ...formInfo, [name]: text });
      break;
    case "email":
      let emailregex = /\S+@\S+\.\S+/;
      setFormInfo({ ...formInfo, [name]: text });
      break;
    case "password":
      setFormInfo({ ...formInfo, [name]: text });
      break;
    default:
      break;
  }
};
  return (
    <div className="App">
      <input
        name="firstName"
        value={formInfo.name}
        placeholder="First Name"
        onChange={(e) => validateInput
          setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
        }
        type="text"
      />
      <input
        name="lastName"
        value={formInfo.name}
        placeholder="Last Name"
        onChange={(e) =>
          setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
        }
        type="text"
      />
      <input
        name="email"
        value={formInfo.name}
        placeholder="email"
        onChange={(e) =>
          setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
        }
        type="text"
      />
      <input
        name="password"
        value={formInfo.name}
        placeholder="Password"
        onChange={(e) =>
          setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
        }
        type="text"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
