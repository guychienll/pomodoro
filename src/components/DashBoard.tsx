import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FormBox from "../components/task/FormBox";
import TomatoEstimater from "./task/TomatoEstimater";
import { enumDashboardType } from "src/enum/enumDashboardType";

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
`;
const DashboardTitle = styled.div`
  color: #acacac;
  font-size: 20px;
  font-weight: bold;
`;

const Dashboard: (props: any) => JSX.Element =props => {
  const getCurrentDashboard: () => JSX.Element = () => {
    const current: enumDashboardType = props.dashboards.find(db => db.status === true).type;
    switch (current) {
      case enumDashboardType.AddNewTask:
        return (
          <>
            <FormBox title="TASK TITLE">
              <input type="text" placeholder="My Second Task" />
            </FormBox>
            <FormBox title="ESTIMATED TOMOTO">
              <TomatoEstimater />
            </FormBox>
          </>
        );
      case enumDashboardType.TaskLists:
        return <></>;
      case enumDashboardType.AnalyticsReport:
        return <></>;
      case enumDashboardType.RingTone:
        return <></>;
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
