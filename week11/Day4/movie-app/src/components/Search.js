import React, { useEffect, useState } from "react";

const Search = () => {
  const [singlemovie, setSingleMovie] = useState({});

  //   useEffect(() => {
  //     const fetchMovie = async (searchinfo) => {
  //       const response = await fetch(
  //         `http://www.omdbapi.com/?s=${searchinfo}&apikey=a2cd64b8`
  //       );
  //       const json = await response.json();
  //       setSingleMovie(json);
  //     };
  //     fetchMovie(searchinfo);
  //   }, []);

  return <input type="text" placeholder="Search" onChange={(e) => Search(e)} />;
};

export default Search;
