import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const defaultForm = {
    name: "",
    password: "",
    address: "",
    email: "",
  };
  const [formData, setFormData] = useState({ defaultForm });
  const validateInput = (text, name) => {
    switch (name) {
      case "name":
        setFormData({ ...formData, [e.target.name]: e.target.value });
        break;
      case "email":
        setFormData({ ...formData, [e.target.name]: e.target.value });
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <h1>Form</h1>
      <form>
        <label>
          Essay:
          <textarea />
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          placeholder="Name"
          type="text"
        />
        <input
          name="email"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.data })
          }
          placeholder="email"
          type="text"
        />
        <input
          name="password"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.data })
          }
          placeholder="password"
          type="text"
        />
        <input
          name="address"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.data })
          }
          placeholder="address"
          type="text"
        />
        <input placeholder="submit" type="text" />
      </form>
    </div>
  );
}

export default App;
