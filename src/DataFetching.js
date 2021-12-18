import React, { useState, useEffect } from "react";
import axios from "axios";

export const DataFetching = () => {
 const [pokeData, setPokeData] = useState([]);

 useEffect(() => {
  axios
   .get(`https://pokeapi.co/api/v2/pokemon/4`)
   .then((res) => {
    const { data } = res;
    console.log(data);
    setPokeData(data);
   })
   .catch((err) => console.log(err));
 }, []);

 return (
  <div>
   <ul>
    <li>{pokeData.name}</li>
    <li>{pokeData.height}</li>
    <li>{pokeData.id}</li>
   </ul>
  </div>
 );
};
