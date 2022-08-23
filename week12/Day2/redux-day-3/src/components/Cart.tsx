import React from "react";

type CartStructure = {
  description: string;
  price: string;
};
export default function cart(props: CartStructure): JSX.Element {
  return (
    <div>
      <h1>{props.description}</h1>
      <h2>{props.price}</h2>
    </div>
  );
}
