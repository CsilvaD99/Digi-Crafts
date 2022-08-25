import React from "react";
import Student from "./Student";

export default function BackEnd({ Back }) {
  return (
    <div className="binarybots">
      <h1>BackEnd</h1>
      {Back?.map((student) => (
        <Student student={student} />
      ))}
    </div>
  );
}
