import React from "react";
import Prop5 from "./Prop5";
export default function prop4(props) {
  return (
    <div>
      prop4
      <Prop5 house={props.house} owner={props.owner} />;
    </div>
  );
}
