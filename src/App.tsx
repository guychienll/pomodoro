import React from "react";
import "./App.css";
import styled from "styled-components";
import DashBoard from "./components/DashBoard";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eeeeee;
  display: flex;
`;
const TimerWrapper = styled.div`
  width: 95%;
  height: 100%;
  background-color: #eaeaea;
`;
const DashBoardWrapper = styled.div`
  width: 5%;
  height: 100%;
  background-color: #333333;
`;
const App = () => {
  return (
    <Container>
      <TimerWrapper></TimerWrapper>
      <DashBoardWrapper>
        <DashBoard></DashBoard>
      </DashBoardWrapper>
    </Container>
  );
};

export default App;
