import React from "react";
import styled from "styled-components";

const Wrapper: any = styled.button<{ btnStyle: any }>`
  width: ${props => props.btnStyle.width};
  border-radius: 30px;
  height: 50px;
  font-size: 19px;
  font-family: Lato;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: ${props => props.btnStyle.mainColor};
  border: 3px solid ${props => props.btnStyle.mainColor};
  background-color: transparent;
  transition: 0.1s linear;
  :hover {
    color: #fcfcfc;
    border: 3px solid ${props => props.btnStyle.mainColor};
    background-color: ${props => props.btnStyle.mainColor};
  }
`;

type buttonProps = {
  btnText: string;
  btnStyle: any;
  btnAction: any;
  children?: JSX.Element;
};

const Button: (props: buttonProps) => JSX.Element = (props: buttonProps) => {
  // TODO: not to know why it add is null
  // const handleActionOnKeyUp: (e: KeyboardEvent) => void = (e: KeyboardEvent): void => {
  //   if (e.keyCode === 13) {
  //     props.btnAction();
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("keyup", handleActionOnKeyUp);
  //   return () => {
  //     window.removeEventListener("keyup", handleActionOnKeyUp);
  //   };
  // }, []);
  return (
    <Wrapper onClick={props.btnAction} btnStyle={props.btnStyle}>
      {props.children !== undefined && props.children}
      {props.btnText}
    </Wrapper>
  );
};

export default Button;
