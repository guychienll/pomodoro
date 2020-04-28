import React, { useState } from "react";
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
import { enumTaskStatus } from "./enum/enumTaskStatus";
import { ITask } from "./interface/ITask";
import { IDashboard } from "./interface/IDashboard";

const Container: any = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  display: flex;
`;
const TimerWrapper: any = styled.div<{ isDashboardOn: boolean }>`
  width: ${props => {
    return props.isDashboardOn === true ? "calc(65% - 80px)" : "calc(100% - 80px)";
  }};
  background-color: #eaeaea;
  height: 100%;
  transition: 0.3s ease-in-out;
`;
const DashboardWrapper: any = styled.div<{ isDashboardOn: boolean }>`
  width: ${props => {
    return props.isDashboardOn === true ? "calc(35% + 80px)" : "80px";
  }};
  height: 100%;
  display: flex;
  transition: 0.3s ease-in-out;
`;
const App: () => JSX.Element = () => {
  const [isDashboardOn, setIsDashboardOn] = useState(true);
  const [dashboards, setDashboards] = useState([
    {
      type: enumDashboardType.AddNewTask,
      status: true,
      name: "ADD NEW TASK",
      toggledSrc: AddToggledIcon,
      untoggledSrc: AddUntoggledIcon,
    } as IDashboard,
    {
      type: enumDashboardType.TaskLists,
      status: false,
      name: "TASK LISTS",
      toggledSrc: ListToggledIcon,
      untoggledSrc: ListUntoggledIcon,
    } as IDashboard,
    {
      type: enumDashboardType.AnalyticsReport,
      status: false,
      name: "ANALYTICS REPORT",
      toggledSrc: AnalysisToggledIcon,
      untoggledSrc: AnalysisUntoggledIcon,
    } as IDashboard,
    {
      type: enumDashboardType.RingTone,
      status: false,
      name: "RING TONE",
      toggledSrc: RingtoneToggledIcon,
      untoggledSrc: RingtoneUntoggledIcon,
    } as IDashboard,
  ]);
  const [tasks, setTasks] = useState([
    {
      name: "First Task",
      estimated: 5,
      status: enumTaskStatus.Todo,
      isContentOn: false,
      createdOn: 12345,
      modifiedOn: new Date().getTime(),
    } as ITask,
    {
      name: "Second Task",
      estimated: 3,
      status: enumTaskStatus.Todo,
      isContentOn: true,
      createdOn: 12346,
      modifiedOn: new Date().getTime(),
    } as ITask,
    {
      name: "Third Task",
      estimated: 7,
      status: enumTaskStatus.Done,
      isContentOn: false,
      createdOn: 12347,
      modifiedOn: new Date().getTime(),
    } as ITask,
  ]);
  const handleDashboardToggleOnClick: (dashboardType: enumDashboardType) => void = (
    dashboardType: enumDashboardType
  ) => {
    const dashboardIsOn: IDashboard = dashboards.find(dashboard => dashboard.status === true);
    if (dashboardIsOn.type === dashboardType) {
      setIsDashboardOn(!isDashboardOn);
    }
    if (dashboardIsOn.type !== dashboardType && isDashboardOn === false) {
      setIsDashboardOn(!isDashboardOn);
    }
    const cloneDashboards: IDashboard[] = [...dashboards];
    const newDashboards: IDashboard[] = cloneDashboards.map(dashboard => {
      dashboard.type !== dashboardType ? (dashboard.status = false) : (dashboard.status = true);
      return dashboard;
    });
    setDashboards(newDashboards);
  };
  const handleDashboardTagOnClick: (toggle: boolean) => void = (toggle: boolean) => {
    setIsDashboardOn(toggle);
  };
  const handleTaskOnClick: (key: number) => void = (key: number) => {
    const cloneTasks: ITask[] = [...tasks];
    cloneTasks.map(task => {
      if (task.createdOn === key) {
        task.isContentOn = !task.isContentOn;
      } else {
        task.isContentOn = false;
      }
    });
    setTasks(cloneTasks);
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
        <Dashboard
          dashboards={dashboards}
          isDashboardOn={isDashboardOn}
          tasks={tasks}
          handleTaskOnClick={handleTaskOnClick}
        />
      </DashboardWrapper>
    </Container>
  );
};

export default App;
