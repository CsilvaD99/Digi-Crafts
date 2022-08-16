import "./App.css";
import { useState } from "react";
import { Students, tas } from "./dummydata";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Menu from "./Menu";
import AD from "./AD";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Header />
      <Menu />
      <Content />
      <AD />
      <Footer />
    </div>
  );
}

export default App;
