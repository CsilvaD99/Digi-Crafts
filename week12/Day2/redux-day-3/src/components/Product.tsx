import React from "react";
import { JsxAttribute } from "typescript";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import Cart from "./Cart";

type ProductStructure = {
  description: string;
  price: string;
};

export default function Product(props: ProductStructure): JSX.Element {
  const dispatch = useAppDispatch();
  //   const CartItems = useAppSelector((state) => state.cart);
  return (
    <div>
      <h1>{props.description}</h1>
      <h2>{props.price}</h2>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}>
        Add to Cart
      </button>
      {/* {CartItems?.map((item) => (
        <Cart {...item} />
      ))} */}
    </div>
  );
}
