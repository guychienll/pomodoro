import React from "react";
import styled, { keyframes } from "styled-components";
type clockProps = {
  timeRemains: number;
};

const wave = keyframes`
  from {
    transform:rotate(360deg) ;
  }

  to {
    transform: rotate(0deg) ;

  }
`;

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 5px solid #ea5548;
  margin: 50px 0;
  position: relative;
  overflow: hidden;
  background-color: #ea5548;
  ::before {
    content: "";
    position: absolute;
    top: -60%;
    left: -22%;
    width: 145%;
    height: 145%;
    border-radius: 37%;
    animation: ${wave} 5s linear 0s infinite normal;
    background: #eeeeee;
  }
`;

const Time = styled.div`
  font: Bold 56px/72px Lato;
  letter-spacing: 4px;
  color: #333333;
  z-index: 1;
`;

const Clock: (props: clockProps) => JSX.Element = (props: clockProps) => {
  const { timeRemains } = props;
  const getFormatedTime: (remains: number) => string = (remains: number) => {
    const minutes: string = remains / 60 < 10 ? `0${Math.floor(remains / 60)}` : `${Math.floor(remains / 60)}`;
    const seconds: string = remains % 60 < 10 ? `0${remains % 60}` : `${remains % 60}`;
    return `${minutes}:${seconds}`;
  };
  return (
    <Wrapper>
      <Time>{getFormatedTime(timeRemains)}</Time>
    </Wrapper>
  );
};

export default Clock;
