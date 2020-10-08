import React, { useEffect, useState } from "react";
import Input from "../Input";

const HeroList = () => {
  const [state, setState] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if(name){
      async function fetchData() {
        try {
          const response = await fetch(
            `http://gateway.marvel.com/v1/public/characters?ts=1&limit=12&nameStartsWith=${name}&apikey=6e989ff5d88c497b48d0e952fddb7486&hash=6b7f1e9d88d7844d0941411e19183fbf`
          );
          const data = await response.json();
          setState(data.data.results);
          
        } catch (e) {
          console.log(e);
        }
      }
      fetchData();
    }

  }, [name]);

  const renderHeroes = () => {
    return state.map(
      (hero, i) =>
        (hero.name)
    );
  };

  return (
    <>
      <Input setName={setName}/>
      <div>{renderHeroes()}</div>
    </>
  );
};

export default HeroList;
