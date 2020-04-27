import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import DashboardNavbar from "./components/DashboardNavbar";
import Dashboard from "./components/Dashboard";
import ListUntoggledIcon from "./assets/icons/list_white.svg";
import AddUntoggledIcon from "./assets/icons/add_white.svg";
import RingtoneUntoggledIcon from "./assets/icons/ringtone_white.svg";
import AnalysisUntoggledIcon from "./assets/icons/analysis_white.svg";
import ListToggledIcon from "./assets/icons/list_red.svg";
import AddToggledIcon from "./assets/icons/add_red.svg";
import RingtoneToggledIcon from "./assets/icons/ringtone_red.svg";
import AnalysisToggledIcon from "./assets/icons/analysis_red.svg";
import { enumDashboardType } from "./enum/enumDashboardType";

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
  const [dashboards, setDashboards] = useState([
    {
      type: enumDashboardType.AddNewTask,
      status: true,
      name: "ADD NEW TASK",
      toggledSrc: AddToggledIcon,
      untoggledSrc: AddUntoggledIcon,
    },
    {
      type: enumDashboardType.TaskLists,
      status: false,
      name: "TASK LISTS",
      toggledSrc: ListToggledIcon,
      untoggledSrc: ListUntoggledIcon,
    },
    {
      type: enumDashboardType.AnalyticsReport,
      status: false,
      name: "ANALYTICS REPORT",
      toggledSrc: AnalysisToggledIcon,
      untoggledSrc: AnalysisUntoggledIcon,
    },
    {
      type: enumDashboardType.RingTone,
      status: false,
      name: "RING TONE",
      toggledSrc: RingtoneToggledIcon,
      untoggledSrc: RingtoneUntoggledIcon,
    },
  ]);

  const handleDashboardToggleOnClick: (dashboardType: enumDashboardType) => void = (
    dashboardType: enumDashboardType
  ) => {
    const dashboardIsOn: any = dashboards.find(dashboard => dashboard.status === true);
    if (dashboardIsOn.type === dashboardType) {
      setIsDashboardOn(!isDashboardOn);
    }
    if (dashboardIsOn.type !== dashboardType && isDashboardOn === false) {
      setIsDashboardOn(!isDashboardOn);
    }
    const cloneDashboards: any[] = [...dashboards];
    const newDashboards: any[] = cloneDashboards.map(dashboard => {
      dashboard.type !== dashboardType ? (dashboard.status = false) : (dashboard.status = true);
      return dashboard;
    });
    setDashboards(newDashboards);
  };
  const handleDashboardTagOnClick: (toggle: boolean) => void = (toggle: boolean) => {
    setIsDashboardOn(toggle);
  };
  return (
    <Container>
      <TimerWrapper isDashboardOn={isDashboardOn} />
      <DashboardWrapper isDashboardOn={isDashboardOn}>
        <DashboardNavbar
          dashboards={dashboards}
          isDashboardOn={isDashboardOn}
          handleDashboardToggleOnClick={handleDashboardToggleOnClick}
          handleDashboardTagOnClick={handleDashboardTagOnClick}
        />
        <Dashboard dashboards={dashboards} isDashboardOn={isDashboardOn} />
      </DashboardWrapper>
    </Container>
  );
};

export default App;
