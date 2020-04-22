import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import DashboardNavbar from "./components/DashboardNavbar";
import Dashboard from "./components/Dashboard";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  background-color: #eaeaea;
`;
const TimerWrapper = styled.div<{ isDashboardOn: boolean }>`
  width: ${props => {
    return props.isDashboardOn === true ? "60%" : "95%";
  }};
  height: 100%;
`;
const DashboardWrapper = styled.div<{ isDashboardOn: boolean }>`
  width: ${props => {
    return props.isDashboardOn === true ? "40%" : "5%";
  }};
  height: 100%;
  display: flex;
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
