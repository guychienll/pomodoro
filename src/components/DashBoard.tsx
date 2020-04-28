import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { enumDashboardType } from "src/enum/enumDashboardType";
import AddNewTask from "./task/AddNewTask";
import TaskLists from "./task/TaskLists";
const Wrapper = styled.div<{ isDashboardOn: boolean }>`
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
const DashboardTitle = styled.div`
  width: 80%;
  color: #fcfcfc;
  font-size: 24px;
  font-weight: bold;
  font-family: Lato;
  padding: 25px 0;
  margin-top: 5px;
  border-bottom: 1px solid #414141;
`;

const Dashboard: (props: any) => JSX.Element =props => {
  const getCurrentDashboard: () => JSX.Element = () => {
    const current = props.dashboards.find(db => db.status === true);
    switch (current.type) {
      case enumDashboardType.AddNewTask:
        return (
          <AddNewTask>
            <DashboardTitle>{current.name}</DashboardTitle>
          </AddNewTask>
        );
      case enumDashboardType.TaskLists:
        return (
          <TaskLists handleTaskOnClick={props.handleTaskOnClick} tasks={props.tasks}>
            <DashboardTitle>{current.name}</DashboardTitle>
          </TaskLists>
        );
      case enumDashboardType.AnalyticsReport:
        return <DashboardTitle>{current.name}</DashboardTitle>;
      case enumDashboardType.RingTone:
        return <DashboardTitle>{current.name}</DashboardTitle>;
      default:
        throw new Error("error");
    }
  };
  return (
    <Wrapper isDashboardOn={props.isDashboardOn}>
      {props.isDashboardOn ? getCurrentDashboard() : null}
    </Wrapper>
  );
};

Dashboard.prototype = {
  isDashboardOn: PropTypes.bool,
  dashboards: PropTypes.array,
  tasks: PropTypes.array,
};

export default Dashboard;
