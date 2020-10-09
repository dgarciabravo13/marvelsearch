import React from "react";
import {InputContainer} from "./style";
import styled from "styled-components";

const InputItem = styled.input`
  display: block;
  width: 100%;
  height: 2.375rem;
  padding: 0.375rem 0.75rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  font-size:1.5rem;
  border: 1px solid grey;
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Input = ({setName}) => {
  return (
    <InputContainer>
      <h1>Buscador</h1>
      <InputItem className="form-control" onChange={e => {e.preventDefault(); setName(e.target.value)}}/>
    </InputContainer>
  );
};

 
export default Input;