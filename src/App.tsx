import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import DashboardNavbar from "./components/DashboardNavbar";
import Dashboard from "./components/Dashboard";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  display: flex;
`;
const TimerWrapper = styled.div<{ isDashboardOn: boolean }>`
  width: ${props => {
    return props.isDashboardOn === true ? "calc(65% - 80px)" : "calc(100% - 80px)";
  }};
  background-color: #eaeaea;
  height: 100%;
  transition: 0.3s ease-in-out;
`;
const DashboardWrapper = styled.div<{ isDashboardOn: boolean }>`
  width: ${props => {
    return props.isDashboardOn === true ? "calc(35% + 80px)" : "80px";
  }};
  height: 100%;
  display: flex;
  transition: 0.3s ease-in-out;
`;
const App = () => {
  const [isDashboardOn, setIsDashboardOn] = useState(false);

  const dashboardToggleHandler = (e, toggle: boolean) => {
    setIsDashboardOn(toggle);
  };

  return (
    <Container>
      <TimerWrapper isDashboardOn={isDashboardOn}></TimerWrapper>
      <DashboardWrapper isDashboardOn={isDashboardOn}>
        <DashboardNavbar
          isDashboardOn={isDashboardOn}
          dashboardToggleHandler={dashboardToggleHandler}
        ></DashboardNavbar>
        <Dashboard isDashboardOn={isDashboardOn}></Dashboard>
      </DashboardWrapper>
    </Container>
  );
};

export default App;
