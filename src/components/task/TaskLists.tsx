import React, { useState } from "react";
import styled from "styled-components";
import List from "../shared/List";
import PropTypes from "prop-types";
import { enumTaskStatus } from "src/enum/enumTaskStatus";
import tomatoColor from "../../assets/icons/tomato_small_color.svg";
import FormBox from "./FormBox";
import { taskListsProps } from "../../typeAlias/taskListsProps";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #fcfcfc;
`;
const TabGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 25px;
  margin-top: 25px;
`;
const Tab = styled.div<{ currentStatus: enumTaskStatus; tabType: enumTaskStatus }>`
  min-width: 55px;
  border-radius: 8px 8px 0 0;
  width: calc(100% / 6);
  height: 100%;
  background-color: ${props => (props.currentStatus === props.tabType ? "#ea5548" : "#606060")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Lato;
  font-weight: bold;
  font-size: 12px;
  margin-right: 5px;
  :hover {
    cursor: pointer;
  }
`;

const HeaderIcon = styled.div<{ isContentOn: boolean }>`
  background-image: url(${tomatoColor});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  width: calc(100% / 25);
  min-width: 17px;
  margin: 0px 15px;
  opacity: ${props => {
    return props.isContentOn ? "100%" : "0%";
  }};
  transition: 0.1s ease-in;
`;
const Task = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1px;
`;

const Title = styled.div`
  width: calc(100% / 3.5);
  min-width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  .name {
    font-family: Lato;
    width: 100%;
  }
  .estimated {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    .dot {
      background-color: #ea5548;
      border-radius: 100%;
      width: 10px;
      height: 10px;
      margin-right: auto;
    }
  }
`;
const Content = styled.div<{ isContentOn: boolean }>`
  width: 80%;
  height: ${props => (props.isContentOn ? "380px" : "0")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #414141;
  transition: all 0.1s ease-in-out;
  overflow: hidden;
`;
const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const BtnGroup = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const NoDatas = styled.div`
  width: 80%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  font-family: Lato;
  margin-top: 30px;
`;

const TaskLists = (props: taskListsProps) => {
  const [tabStatus, setTabStatus] = useState(enumTaskStatus.Todo);
  const handleTabStatusOnClick = (tabType: enumTaskStatus) => {
    setTabStatus(tabType);
  };

  const ContentByTaskTypeMap: Map<enumTaskStatus, JSX.Element> = new Map([
    [
      enumTaskStatus.Todo,
      <FormGroup>
        <FormBox title="TASK TITLE">
          <input type="text" placeholder="My Second Task" />
        </FormBox>
        <FormBox title="ESTIMATED TOMOTO">{/* <TomatoEstimater /> */}</FormBox>
        <BtnGroup>
          {/* <Button btnStyle={{}} btnText="Archive" />
          <Button btnStyle={{}} btnText="SAVE" /> */}
        </BtnGroup>
      </FormGroup>,
    ],
    [enumTaskStatus.Done, null],
    [enumTaskStatus.Archieve, null],
  ]);
  return (
    <Wrapper>
      {props.children}
      <TabGroup>
        {Object.values(enumTaskStatus)
          .filter(status => Number(status) > 0)
          .map(status => {
            return (
              <Tab
                key={status}
                currentStatus={tabStatus}
                tabType={status as enumTaskStatus}
                onClick={() => {
                  handleTabStatusOnClick(status as enumTaskStatus);
                }}
              >
                {enumTaskStatus[status]}
              </Tab>
            );
          })}
      </TabGroup>
      {props.tasks.filter(task => task.status === tabStatus).length > 0 ? (
        props.tasks
          .filter(task => task.status === tabStatus)
          .sort((t1, t2) => (t1.modifiedOn > t2.modifiedOn ? -1 : 1))
          .map(sortedTask => (
            <Task key={sortedTask.createdOn}>
              <List
                primaryKey={sortedTask.createdOn}
                handleTaskOnClick={props.handleTaskOnClick}
                headerIcon={<HeaderIcon isContentOn={sortedTask.isContentOn} />}
                actionBtn={<i className="fas fa-ellipsis-h fa-lg"></i>}
                title={
                  <Title>
                    <div className="name">{sortedTask.name}</div>
                    <div className="estimated">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((dot, index) => {
                        return <div key={index} className="dot"></div>;
                      })}
                    </div>
                  </Title>
                }
              />
              <Content isContentOn={sortedTask.isContentOn}>
                {ContentByTaskTypeMap.get(sortedTask.status)}
              </Content>
            </Task>
          ))
      ) : (
        <NoDatas>No {enumTaskStatus[tabStatus]} Tasks</NoDatas>
      )}
    </Wrapper>
  );
};

TaskLists.prototype = {
  tasks: PropTypes.array,
};

export default TaskLists;
