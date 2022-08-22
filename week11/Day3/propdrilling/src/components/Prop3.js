import React from "react";
import Prop4 from "./Prop4";
export default function prop3(props) {
  return (
    <div>
      prop3
      <Prop4 house={props.house} owner={props.owner} />
    </div>
  );
}
