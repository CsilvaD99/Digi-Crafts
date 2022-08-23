const initialproducts = [
  { description: "JoeGlasses", price: "$999" },
  { description: "Rahmin's Controller", price: "$70" },
  { description: "West's Hat", price: "$50" },
  { description: "car", price: "$14257365" },
  { description: "A/C", price: "$1,800" },
  { description: "benji", price: "$1" },
];

type State = {
  products: { description: string; price: string }[];
  cart: { description: string; price: string }[];
};
const initialState: State = {
  products: initialproducts,
  cart: [],
};
type Action = {
  type: string;
  payload?: any;
};
console.log(initialState);
const rootReducer = (state = initialState, action: Action) => {
  switch (action?.type) {
    case "ADD_TO_CART":
      const newcart = state.cart;
      return { ...state, cart: [...newcart, action?.payload] };
    // return { ...state, products: state. };
    // case "SUB":
    //   return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
export default rootReducer;
