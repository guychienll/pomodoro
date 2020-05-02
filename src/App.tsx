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
  const [taskBuffer, setTaskBuffer] = useState(initTaskBuffer as ITask);
  const [tasks, setTasks] = useState([
    {
      name: "demo task 1",
      point: 5,
      isContentOn: true,
      status: enumTaskStatus.Todo,
      createdOn: 11111,
      modifiedOn: 11111,
    },
    {
      name: "demo task 2",
      point: 7,
      isContentOn: false,
      status: enumTaskStatus.Todo,
      createdOn: 22222,
      modifiedOn: 22222,
    },
    {
      name: "demo task 3",
      point: 3,
      isContentOn: false,
      status: enumTaskStatus.Todo,
      createdOn: 33333,
      modifiedOn: 33333,
    },
  ] as ITask[]);

  const handleTaskBufferOnChange: (e: any) => void = (e: any) => {
    const cloneTaskBuffer: ITask = { ...taskBuffer };
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

  const handleDashboardToggleOnClick: (e: any, dashboardType?: enumDashboardType) => void = (
    e: any,
    dashboardType?: enumDashboardType
  ) => {
    if (e.target.name === enumDashboardToggleType.Tag) {
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
          tasks={tasks}
          taskBuffer={taskBuffer}
          dashboards={dashboards}
          isDashboardOn={isDashboardOn}
          handleTaskOnClick={handleTaskOnClick}
          handleAddNewTaskOnClick={handleAddNewTaskOnClick}
          handleTaskBufferOnChange={handleTaskBufferOnChange}
        />
      </DashboardWrapper>
    </Container>
  );
};

export default App;
