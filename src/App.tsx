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
`;
const TimerWrapper = styled.div<{ isDashboardOn: boolean }>`
  width: ${props => {
    return props.isDashboardOn === true ? "60%" : "95%";
  }};
  background-color: #eaeaea;
  height: 100%;
  transition: 0.3s ease-in-out;
`;
const DashboardWrapper = styled.div<{ isDashboardOn: boolean }>`
  width: ${props => {
    return props.isDashboardOn === true ? "40%" : "5%";
  }};
  background-color: #333333;
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
