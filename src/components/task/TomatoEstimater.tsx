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
const TomatoEstimater: (props: {
  taskBuffer: ITask;
  handleTaskBufferOnChange: any;
}) => JSX.Element =props => {
  const [estimatedValueBuffer, setEstimatedValueBuffer] = useState(0);
  const handleTomatosMouseOver: (index: number) => void =index => {
    setEstimatedValueBuffer(index + 1);
  };
  const handleTomatosMouseOut: (index: number) => void =_index => {
    setEstimatedValueBuffer(0);
  };
  const { estimated } = props.taskBuffer;
  return (
    <Wrapper>
      {estimated.map((_tomato, index) => (
        <Tomato
          key={index}
          id="estimated"
          onMouseOver={() => {
            handleTomatosMouseOver(index);
          }}
          onMouseOut={() => {
            handleTomatosMouseOut(index);
          }}
          onClick={e => {
            let cloneEstimated: boolean[] = [...estimated];
            cloneEstimated = cloneEstimated.map((_e, i) => (i <= index ? true : false));
            props.handleTaskBufferOnChange(e, cloneEstimated);
          }}
          tomatoStatus={
            estimated.filter(e => e === true).length > index
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
