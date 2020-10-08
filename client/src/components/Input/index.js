import React from "react";
import {InputContainer} from "./style";
import styled from "styled-components";

const InputItem = styled.input`
  padding: 5px;
  text-align: left;
  font-size: 15px;
  width:40%;
`;

const Input = ({setName}) => {
  return (
    <InputContainer>
      <h1>Buscador</h1>
      <InputItem onChange={e => {e.preventDefault(); setName(e.target.value)}}/>
    </InputContainer>
  );
};

 
export default Input;