import React from "react";
import styled from "styled-components";
type clockProps = {
  timeRemains: number;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 100%;
  background-color: #ea5548;
  margin: 50px 0;
`;

const Time = styled.div`
  font: Bold 56px/72px Lato;
  letter-spacing: 4px;
  color: #333333;
  opacity: 1;
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
