import West from "../assets/westithink.png";
import jason from "../assets/jason.png";
import ramen from "../assets/ramen.png";
import olivia from "../assets/olivia.png";
import andrea from "../assets/andrea.png";
import ethan from "../assets/ethan.png";
import amanda from "../assets/amanda.png";
import coolstacy from "../assets/coolstacy.png";
import blake from "../assets/blake.png";
import carlos from "../assets/carlos.png";
const initialState = {
  students: [
    { name: "West", img: West },
    { name: "Rahmin", img: ramen },
    { name: "Olivia", img: olivia },
    { name: "Jason", img: jason },
    { name: "Ethan", img: ethan },
    { name: "Amanda", img: amanda },
    { name: "Andrea", img: andrea },
    { name: "Stacy", img: coolstacy },
    { name: "Carlos", img: carlos },
    { name: "Blake", img: blake },
  ],
  Front: [],
  Back: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FRONT_ADD":
      const frontStudents = state.Front;
      return { ...state, Front: [...frontStudents, action.payload] };
    case "BACK_ADD":
      const BackStudents = state.Back;
      return { ...state, Back: [...BackStudents, action.payload] };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
export default rootReducer;
