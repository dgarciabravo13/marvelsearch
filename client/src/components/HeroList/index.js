import React, { useEffect, useState } from "react";
import Input from "../Input";
import Hero from "../Hero";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;

const HeroList = () => {
  const [state, setState] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.length === 0) return;

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
  }, [name]);

  const renderHeroes = () => {
    return name.length === 0 ? null : state.map((hero, i) => <Hero key={i} hero={hero} />);
  };

  return (
    <>
      <Input setName={setName} />
      <Container>{renderHeroes()}</Container>
    </>
  );
};

export default HeroList;
