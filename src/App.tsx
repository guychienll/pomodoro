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
import Timer from "./components/timer/Timer";

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
  display: flex;
  justify-content: center;
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
  const [selectedTaskId, setSelectedTaskId] = useState(
    tasks.filter(task => task.status === enumTaskStatus.Todo).length !== 0
      ? tasks
          .filter(task => task.status === enumTaskStatus.Todo)
          .sort((t1, t2) => (t1.createdOn > t2.createdOn ? 1 : -1))[0].createdOn
      : 0
  );

  const handleTaskBufferOnChange: (e: any) => void = (e: any) => {
    const cloneTaskBuffer: ITask = { ...taskBuffer };
    cloneTaskBuffer[e.target.name] = e.target.value;
    setTaskBuffer(cloneTaskBuffer);
  };

  const handleAddNewTaskOnClick: () => void = () => {
    const cloneTasks: ITask[] = [...tasks];
    const cloneTaskBuffer: ITask = { ...taskBuffer };
    const timeStamp: number = new Date().getTime();
    [cloneTaskBuffer.createdOn, cloneTaskBuffer.modifiedOn, cloneTaskBuffer.pointHasDone] = [timeStamp, timeStamp, 0];
    cloneTasks.push(cloneTaskBuffer);
    setTasks(cloneTasks);
    setTaskBuffer(initTaskBuffer);
  };
  const handleUpdateTaskOnClick: (e: any, taskId: number) => void = (e: any, taskId: number) => {
    const cloneTasks: ITask[] = [...tasks];
    cloneTasks.forEach(task => {
      if (task.createdOn === taskId) {
        Object.keys(task).forEach(key => {
          task[key] = taskBuffer[key];
        });
        task.modifiedOn = new Date().getTime();
      }
    });
    setTasks(cloneTasks);
  };

  const handleArchiveTaskOnClick: (e: any, taskId: number, isUnArchive: boolean) => void = (
    e: any,
    taskId: number,
    isUnArchive: boolean = false
  ) => {
    const cloneTasks: ITask[] = [...tasks];
    cloneTasks.forEach(task => {
      if (task.createdOn === taskId) {
        isUnArchive ? (task.status = enumTaskStatus.Todo) : (task.status = enumTaskStatus.Archieve);
        task.modifiedOn = new Date().getTime();
        task.isContentOn = false;
      }
    });
    setTasks(cloneTasks);
    setSelectedTaskId(
      cloneTasks.filter(task => task.status === enumTaskStatus.Todo).length !== 0
        ? cloneTasks
            .filter(task => task.status === enumTaskStatus.Todo)
            .sort((t1, t2) => (t1.createdOn > t2.createdOn ? 1 : -1))[0].createdOn
        : 0
    );
  };

  const handleRedoTaskOnClick: (e: any, taskId: number) => void = (e: any, taskId: number) => {
    const cloneTasks: ITask[] = [...tasks];
    cloneTasks.forEach(task => {
      if (task.createdOn === taskId) {
        task.status = enumTaskStatus.Todo;
        task.pointHasDone = 0;
        task.modifiedOn = new Date().getTime();
        task.isContentOn = false;
      }
    });
    setTasks(cloneTasks);
  };
  const handleDashboardToggleOnClick: (e: any, dashboardType?: enumDashboardType) => void = (
    e: any,
    dashboardType?: enumDashboardType
  ) => {
    // initial state start
    const cloneTasks: ITask[] = [...tasks].map(task => {
      task.isContentOn = false;
      return task;
    });
    setTasks(cloneTasks);
    setTaskBuffer(initTaskBuffer);
    // initial state end
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
    const cloneTask: ITask = cloneTasks.find(task => {
      return task.createdOn === key;
    });
    cloneTasks.forEach(task => {
      if (task.createdOn === key) {
        task.isContentOn = !task.isContentOn;
      } else {
        task.isContentOn = false;
      }
    });
    if (cloneTask.status === enumTaskStatus.Todo) {
      setSelectedTaskId(cloneTask.createdOn);
    }
    setTaskBuffer(cloneTask);
    setTasks(cloneTasks);
  };

  const handleClockTimeUp: (key: number) => void = (key: number) => {
    const cloneTasks: ITask[] = [...tasks];
    const cloneTask: ITask = cloneTasks.find(task => {
      return task.createdOn === key;
    });
    cloneTask.pointHasDone++;
    if (Number(cloneTask.point) === cloneTask.pointHasDone) {
      cloneTask.status = enumTaskStatus.Done;
      setSelectedTaskId(
        cloneTasks.filter(task => task.status === enumTaskStatus.Todo).length !== 0
          ? cloneTasks
              .filter(task => task.status === enumTaskStatus.Todo)
              .sort((t1, t2) => (t1.createdOn > t2.createdOn ? 1 : -1))[0].createdOn
          : 0
      );
    }
    setTasks(cloneTasks);
  };

  return (
    <Container>
      <TimerWrapper isDashboardOn={isDashboardOn}>
        <Timer
          handleClockTimeUp={handleClockTimeUp}
          selectedTask={tasks.find(task => task.createdOn === selectedTaskId)}
        ></Timer>
      </TimerWrapper>
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
          handleUpdateTaskOnClick={handleUpdateTaskOnClick}
          handleArchiveTaskOnClick={handleArchiveTaskOnClick}
          handleRedoTaskOnClick={handleRedoTaskOnClick}
        />
      </DashboardWrapper>
    </Container>
  );
};

export default App;
