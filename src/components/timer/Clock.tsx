import React from "react";
import styled from "styled-components";
type clockProps = {};

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
  return (
    <Wrapper>
      <Time>06:25</Time>
    </Wrapper>
  );
};

export default Clock;
