import React from "react";
import { useSelector } from "react-redux";
import Student from "./Student";

export default function FrontEnd({ Front }) {
  const frontcard = useSelector((state) => state.Front);
  console.log(frontcard);
  return (
    <div className="bc-crew">
      <h1>FrontEnd</h1>
      {Front?.map((student) => (
        <Student student={student} />
      ))}
    </div>
  );
}
