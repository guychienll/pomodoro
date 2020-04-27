import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FormBox from "../components/task/FormBox";
import TomatoEstimater from "./task/TomatoEstimater";
import { enumDashboardType } from "src/enum/enumDashboardType";
import Button from "./shared/Button";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
          <>
            <DashboardTitle>{current.name}</DashboardTitle>
            <FormBox title="TASK TITLE">
              <input type="text" placeholder="My Second Task" />
            </FormBox>
            <FormBox title="ESTIMATED TOMOTO">
              <TomatoEstimater />
            </FormBox>
            <Button btnStyle={{}} btnText={`ADD TASK`}></Button>
          </>
        );
      case enumDashboardType.TaskLists:
        return (
          <>
            <DashboardTitle>{current.name}</DashboardTitle>
          </>
        );
      case enumDashboardType.AnalyticsReport:
        return (
          <>
            <DashboardTitle>{current.name}</DashboardTitle>
          </>
        );
      case enumDashboardType.RingTone:
        return (
          <>
            <DashboardTitle>{current.name}</DashboardTitle>
          </>
        );
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
};

export default Dashboard;
