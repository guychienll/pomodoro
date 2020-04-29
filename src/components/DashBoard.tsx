import React from "react";
import styled from "styled-components";
import { enumDashboardType } from "src/enum/enumDashboardType";
import AddNewTask from "./task/AddNewTask";
import TaskLists from "./task/TaskLists";
import { IDashboard } from "src/interface/IDashboard";
import { dashboardProps } from "../typeAlias/dashboardProps";
const Wrapper: any = styled.div<{ isDashboardOn: boolean }>`
  height: 100%;
  background-color: #333333;
  width: ${props => {
    return props.isDashboardOn === false ? "0%" : "35%";
  }};
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s ease-in-out;
  overflow: hidden;
`;
const DashboardTitle: any = styled.div`
  width: 80%;
  color: #fcfcfc;
  font-size: 24px;
  font-weight: bold;
  font-family: Lato;
  padding: 25px 0;
  margin-top: 5px;
  border-bottom: 1px solid #414141;
`;

const Dashboard: (props: dashboardProps) => JSX.Element =props => {
  const current: IDashboard = props.dashboards.find(db => db.status === true);
  const dashboardByCurrentStatusMap: Map<enumDashboardType, JSX.Element> = new Map([
    [
      enumDashboardType.AddNewTask,
      <AddNewTask>
        <DashboardTitle>{current.name}</DashboardTitle>
      </AddNewTask>,
    ],
    [
      enumDashboardType.TaskLists,
      <TaskLists handleTaskOnClick={props.handleTaskOnClick} tasks={props.tasks}>
        <DashboardTitle>{current.name}</DashboardTitle>
      </TaskLists>,
    ],
    [enumDashboardType.AnalyticsReport, null],
    [enumDashboardType.RingTone, null],
  ]);
  return (
    <Wrapper isDashboardOn={props.isDashboardOn}>
      {props.isDashboardOn ? dashboardByCurrentStatusMap.get(current.type) : null}
    </Wrapper>
  );
};

export default Dashboard;
