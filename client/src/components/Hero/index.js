import React, {useState} from "react";
import styled from "styled-components";
import Modal from "react-modal";
import HeroModal from "../HeroModal";

Modal.setAppElement("#root");

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 200px;
  width: 250px;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 1em;
`;

const Img = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  min-width: 200px;
  width: 250px;
  min-height: 210px;
  height: 210px;
  object-fit: cover;
`;

const H2 = styled.h2`
  font-size: 1em;
  padding: 10px;
`;

const Hero = ({ hero }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Column>
      <Img
        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        alt={hero.name}
      />
      <H2>{hero.name}</H2>
      <button onClick={toggleModal}>Detalles</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <HeroModal hero={hero}/>
        <button onClick={toggleModal}>Cerrar</button>
      </Modal>
    </Column>
  );
};

export default Hero;
