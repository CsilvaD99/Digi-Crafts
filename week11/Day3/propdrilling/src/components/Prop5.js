import React from "react";

export default function prop5(props) {
  return (
    <div>
      prop5
      <h1>{props.house.name}</h1>
      <h1>{props.house.address}</h1>
      <h1>{props.owner.name}</h1>
    </div>
  );
}
