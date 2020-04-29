import React from "react";
import styled from "styled-components";

const Wrapper: any = styled.div<{ btnStyle: object }>`
  width: 80%;
  border-radius: 30px;
  height: 50px;
  font-size: 19px;
  font-family: Lato;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: #ea5548;
  border: 3px solid #ea5548;
  background-color: transparent;
  transition: 0.1s linear;
  :hover {
    cursor: pointer;
    color: #fcfcfc;
    border: 3px solid #ea5548;
    background-color: #ea5548;
  }
`;

const Button: (props: { btnText: string; btnStyle: object; btnAction: any }) => JSX.Element =props => {
  return (
    <Wrapper onClick={props.btnAction} btnStyle={props.btnStyle}>
      {props.btnText}
    </Wrapper>
  );
};

export default Button;
