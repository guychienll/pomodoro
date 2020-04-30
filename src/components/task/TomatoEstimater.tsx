import React, { useState } from "react";
import styled from "styled-components";
import tomatoColor from "../../assets/icons/tomato_small_color.svg";
import tomatoGray from "../../assets/icons/tomato_small_gray.svg";
import { ITask } from "src/interface/ITask";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;
const Tomato = styled.button<{ tomatoStatus: string }>`
  width: calc(100% / 15);
  height: 100%;
  background-image: ${props => `url(${props.tomatoStatus})`};
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: 0.2s ease-in;
  background-color: transparent;
  border: none;
  outline: none;
  :hover {
    cursor: pointer;
  }
`;

const TomatoEstimater: (props: {
  taskBuffer: ITask;
  handleTaskBufferOnChange: any;
}) => JSX.Element =props => {
  const tomatos: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [estimatedValueBuffer, setEstimatedValueBuffer] = useState(0);
  const handleTomatosMouseOver: (value: number) => void =value => {
    setEstimatedValueBuffer(value);
  };
  const handleTomatosMouseOut: (value: number) => void =value => {
    setEstimatedValueBuffer(0);
  };
  return (
    <Wrapper>
      {tomatos.map(value => {
        return (
          <Tomato
            key={value}
            name="point"
            value={value}
            onMouseOver={() => {
              handleTomatosMouseOver(value);
            }}
            onMouseOut={() => {
              handleTomatosMouseOut(value);
            }}
            onClick={e => {
              props.handleTaskBufferOnChange(e);
            }}
            tomatoStatus={
              props.taskBuffer.point >= value || estimatedValueBuffer >= value
                ? tomatoColor
                : tomatoGray
            }
          />
        );
      })}
    </Wrapper>
  );
};

export default TomatoEstimater;
