import React, { useState } from "react";
import styled from "styled-components";
import DashboardNavbar from "./components/DashboardNavbar";
import Dashboard from "./components/Dashboard";
import { enumDashboardType } from "./enum/enumDashboardType";
import { ITask } from "./interface/ITask";
import { IDashboard } from "./interface/IDashboard";
import { initDashboards } from "./components/initDashboards";
import { enumTaskStatus } from "./enum/enumTaskStatus";

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
  const [isDashboardOn, setIsDashboardOn] = useState(true as boolean);
  const [dashboards, setDashboards] = useState(initDashboards as IDashboard[]);
  const [taskBuffer, setTaskBuffer] = useState({
    name: "",
    estimated: [false, false, false, false, false, false, false, false, false, false],
    isContentOn: false,
    status: enumTaskStatus.Todo,
    createdOn: new Date().getTime(),
    modifiedOn: new Date().getTime(),
  } as ITask);
  const [tasks, setTasks] = useState([] as ITask[]);

  const handleTaskBufferOnChange: (e: any, estimated?: boolean[]) => void = (
    e: any,
    estimated?: boolean[]
  ) => {
    const cloneTaskBuffer: ITask = { ...taskBuffer };
    if (e.target.id === "estimated") {
      cloneTaskBuffer[e.target.id] = estimated;
    }
    cloneTaskBuffer[e.target.name] = e.target.value;
    setTaskBuffer(cloneTaskBuffer);
  };

  const handleAddNewTaskOnClick: (task: ITask) => void = (task: ITask) => {
    const cloneTasks: ITask[] = [...tasks];
    cloneTasks.push(task);
  };

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
          taskBuffer={taskBuffer}
          dashboards={dashboards}
          isDashboardOn={isDashboardOn}
          tasks={tasks}
          handleTaskOnClick={handleTaskOnClick}
          handleAddNewTaskOnClick={handleAddNewTaskOnClick}
          handleTaskBufferOnChange={handleTaskBufferOnChange}
        />
      </DashboardWrapper>
    </Container>
  );
};

export default App;
