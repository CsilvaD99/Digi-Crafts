import React from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import "./App.css";
import Homepage from "./components/Homepage";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { createClient } from "@supabase/supabase-js";

function App(): JSX.Element {
  const supabaseUrl = "https://mxakcphctxajogkuteth.supabase.co";
  const supabaseAnonKey =
   
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const sendToDatabase = async () => {
    const { data, error } = await supabase
      .from("ProductsDatabase")
      .insert([{ name: "Carlos", items: CartItems }]);
  };

  const products = useAppSelector((state) => state.products);
  const CartItems = useAppSelector((state) => state.cart);

  console.log(CartItems);
  return (
    <div className="App">
      <div className="Products">
        {products?.map((product) => (
          <Product {...product} />
        ))}
      </div>
      <button onClick={sendToDatabase}>Complete Order</button>
      {CartItems?.map((item) => (
        <Cart {...item} />
      ))}
    </div>
  );
}

export default App;
