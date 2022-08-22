import React from "react";
import Prop2 from "./Prop2";
export default function proj1(props) {
  console.log(props);
  return (
    <div>
      proj1
      {props.children}
      <Prop2 house={props.house} owner={props.owner} />
    </div>
  );
}
