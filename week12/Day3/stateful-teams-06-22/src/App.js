import "./App.css";
import MainContainer from "./components/MainContainer";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const students = useSelector((state) => state.students);
  const Front = useSelector((state) => state.Front);
  const Back = useSelector((state) => state.Back);
  const dispatch = useDispatch();
  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button className="button-24" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
      <div className="App">
        <MainContainer students={students} Front={Front} Back={Back} />
      </div>
    </div>
  );
}

export default App;
