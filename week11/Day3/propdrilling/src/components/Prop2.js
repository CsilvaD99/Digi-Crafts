import React from "react";
import Prop3 from "./Prop3";
export default function prop2(props) {
  return (
    <div>
      prop2
      <Prop3 house={props.house} owner={props.owner} />
    </div>
  );
}
