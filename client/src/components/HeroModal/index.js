import React from "react";
import styled from "styled-components";

const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -25px;
  left: -25px;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

const H1 = styled.h1`
  margin-top: 10px;
`;

const HeroModal = ({ hero }) => {
  const { available } = hero.comics;
  const { url } = hero.urls[0];

  return (
    <>
      <ProfileImg
        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        alt={hero.name}
      />
      <H1>{hero.name}</H1>
      <div className="description">
        {!hero.description ? (
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        ) : (
          hero.description
        )}
      </div>
      <footer>
        <div className="projects">
          <div>
            <p>Comics Disponibles:</p>
            <p>{available}</p>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="info"
          >
            Más Info
          </a>
        </div>
      </footer>
    </>
  );
};

export default HeroModal;
