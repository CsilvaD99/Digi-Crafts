import React from "react";

const MovieCard = (props) => {
  console.log("props", props);
  return (
    <div>
      <img src={props?.movie} />
    </div>
  );
};

export default MovieCard;
