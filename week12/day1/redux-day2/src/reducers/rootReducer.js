const initialState = {
  user: "Joe fire",
  weather: { weather: [] },
  location: "",
  changeMe: "",
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state };
    case "SET_WEATHER":
      return { ...state, weather: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "CHANGE_ME":
      return { ...state, changeMe: action.payload };
    case "GET_WEATHER":
      return { ...state };

    default:
      return state;
  }
};
export default rootReducer;
