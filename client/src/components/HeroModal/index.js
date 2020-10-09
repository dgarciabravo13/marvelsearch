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
            In 1961, writer-editor Stan Lee revolutionized superhero comics by
            introducing superheroes designed to appeal to older readers than the
            predominantly child audiences of the medium, thus ushering what
            Marvel later called the Marvel Age of Comics.Modern Marvel's
            first superhero team, the titular stars of The Fantastic Four #1
            (Nov. 1961),broke convention with other comic book archetypes
            of the time by squabbling, holding grudges both deep and petty, and
            eschewing anonymity or secret identities in favor of celebrity
            status.
          </p>
        ) : (
          hero.description
        )}
      </div>
      <footer>
        <div className="projects">
          <div>
            <p>Comics:</p>
            <p>{available}</p>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="info"
          >
            More Info
          </a>
        </div>
      </footer>
    </>
  );
};

export default HeroModal;
