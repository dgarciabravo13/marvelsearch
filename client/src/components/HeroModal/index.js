import React from "react";
import styled from "styled-components";

const Img = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  min-width: 200px;
  width: 250px;
  min-height: 210px;
  height: 210px;
  object-fit: cover;
`;

const HeroModal = ({ hero }) => {
  return (
    <>
      {/* <Img
        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        alt={hero.name}
      /> */}
      {/* <h2>{hero.name}</h2> */}
      {/* <p>{hero.description}</p> */}
      <div id="login-container">
      <div class="profile-img"></div>
      <h1>{hero.name}</h1>
      <div class="description">{hero.description}</div>
      <footer>
          <div class="projects">
            <p>Projects</p>
            <p>154</p>
          </div>
      </footer>
</div>
    </>
  );
};

export default HeroModal;
