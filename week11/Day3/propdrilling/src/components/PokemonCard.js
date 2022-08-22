import React, { useState } from "react";

export default function PokemonCard(props) {
  const [front, setFront] = useState(true);

  return (
    <div className="container">
      <div className="card">
        <h2>{props?.pokemon?.name}</h2>
        <button
          onClick={() => {
            props.delPoke(props.pokemon);
          }}
          className="delbutton"
        >
          Delete
        </button>
        <h2>{props?.pokemon?.hp}</h2>
        <img
          onClick={() => setFront(!front)}
          src={
            front
              ? props?.pokemon?.sprites?.front
              : props?.pokemon?.sprites?.back
          }
          alt=""
        />
      </div>
    </div>
  );
}
