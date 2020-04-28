import React, { useState } from "react";
import styled from "styled-components";
import tomatoColor from "../../assets/icons/tomato_small_color.svg";
import tomatoGray from "../../assets/icons/tomato_small_gray.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;
const Tomato = styled.div<{ tomatoStatus: string; onMouseOver: any }>`
  width: calc(100% / 15);
  height: 100%;
  background-image: ${props => `url(${props.tomatoStatus})`};
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: 0.2s ease-in;
  :hover {
    cursor: pointer;
  }
`;
const TomatoEstimater = () => {
  const [tomatos] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [estimatedValue, setEstimatedValue] = useState(0);
  const [estimatedValueBuffer, setEstimatedValueBuffer] = useState(0);
  const handleTomatosMouseOver: (index: number) => void =index => {
    setEstimatedValueBuffer(index + 1);
  };
  const handleTomatosMouseOut: (index: number) => void =index => {
    setEstimatedValueBuffer(0);
  };
  const handleTomatosClick: (index: number) => void =index => {
    setEstimatedValue(index + 1);
  };
  return (
    <Wrapper>
      {tomatos.map((tomato, index) => (
        <Tomato
          key={index}
          onMouseOver={() => {
            handleTomatosMouseOver(index);
          }}
          onMouseOut={() => {
            handleTomatosMouseOut(index);
          }}
          onClick={() => {
            handleTomatosClick(index);
          }}
          tomatoStatus={
            estimatedValue > index
              ? tomatoColor
              : tomatoGray && estimatedValueBuffer > index
              ? tomatoColor
              : tomatoGray
          }
        />
      ))}
    </Wrapper>
  );
};

export default TomatoEstimater;
