import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import DefaultTeam from "./DefaultTeam";

export default function MainContainer({ students, Front, Back }) {
  return (
    <>
      <FrontEnd Front={Front} />
      <DefaultTeam students={students} />
      <BackEnd Back={Back} />
    </>
  );
}
