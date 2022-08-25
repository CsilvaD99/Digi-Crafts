import React from "react";
import FrontEnd from "./FrontEnd";
import { useSelector, useDispatch } from "react-redux";
export default function Student({ student }) {
  const dispatch = useDispatch();
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        <button
          className="button-24"
          onClick={() => dispatch({ type: "FRONT_ADD", payload: student })}
        >
          Front Enders 4 Lyfe
        </button>

        <button
          className="button-24"
          onClick={() => dispatch({ type: "BACK_ADD", payload: student })}
        >
          In the Backend, it totally matters
        </button>
      </div>
    </div>
  );
}
