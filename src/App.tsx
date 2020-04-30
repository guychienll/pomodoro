import React, { useState } from "react";
import styled from "styled-components";
import DashboardNavbar from "./components/DashboardNavbar";
import Dashboard from "./components/Dashboard";
import { enumDashboardType } from "./enum/enumDashboardType";
import { ITask } from "./interface/ITask";
import { IDashboard } from "./interface/IDashboard";
import { initDashboards } from "./components/initDashboards";
import { initTaskBuffer } from "./components/task/initTaskBuffer";
import { enumDashboardToggleType } from "./enum/enumDashboardToggleType";

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
  const [taskBuffer, setTaskBuffer] = useState(initTaskBuffer as ITask);
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

  const handleAddNewTaskOnClick: () => void = () => {
    const cloneTasks: ITask[] = [...tasks];
    const cloneTaskBuffer: ITask = { ...taskBuffer };
    const timeStamp: number = new Date().getTime();
    [cloneTaskBuffer.createdOn, cloneTaskBuffer.modifiedOn] = [timeStamp, timeStamp];
    cloneTasks.push(cloneTaskBuffer);
    setTasks(cloneTasks);
    setTaskBuffer(initTaskBuffer);
  };

  const handleDashboardToggleOnClick: (
    dashboardToggleType: enumDashboardToggleType,
    dashboardType?: enumDashboardType
  ) => void = (dashboardToggleType: enumDashboardToggleType, dashboardType?: enumDashboardType) => {
    if (dashboardToggleType === enumDashboardToggleType.Tag) {
      setIsDashboardOn(!isDashboardOn);
      return;
    }
    const dashboardIsOpened: IDashboard = dashboards.find(dashboard => dashboard.status === true);
    if (dashboardIsOpened.type === dashboardType) {
      setIsDashboardOn(!isDashboardOn);
    }
    if (dashboardIsOpened.type !== dashboardType && isDashboardOn === false) {
      setIsDashboardOn(!isDashboardOn);
    }
    const cloneDashboards: IDashboard[] = [...dashboards];
    cloneDashboards.forEach(dashboard => {
      dashboard.type !== dashboardType ? (dashboard.status = false) : (dashboard.status = true);
    });
    setDashboards(cloneDashboards);
  };

  const handleTaskOnClick: (key: number) => void = (key: number) => {
    const cloneTasks: ITask[] = [...tasks];
    cloneTasks.forEach(task => {
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
