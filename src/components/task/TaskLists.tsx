import React, { useState } from "react";
import styled from "styled-components";
import List from "../shared/List";
import { enumTaskStatus } from "src/enum/enumTaskStatus";
import tomatoColor from "../../assets/icons/tomato_small_color.svg";
import FormBox from "./FormBox";
import { taskListsProps } from "../../typeAlias/taskListsProps";
import Button from "../shared/Button";
import TomatoEstimater from "./TomatoEstimater";
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
  .tomatos {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    .tomato {
      background-color: #ea5548;
      border-radius: 100%;
      width: 10px;
      height: 10px;
      margin-right: 5px;
    }
  }
`;
const Content = styled.div<{ isContentOn: boolean; tabStatus: enumTaskStatus }>`
  width: 80%;
  height: ${props => {
    const { isContentOn, tabStatus } = props;
    if (isContentOn) {
      switch (tabStatus) {
        case enumTaskStatus.Todo:
          return "310px";
        case enumTaskStatus.Done:
        case enumTaskStatus.Archieve:
          return "70px";
        default:
          return "0xp";
      }
    }
    return "0px";
  }};
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NoDatas = styled.div`
  width: 80%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  font-family: Lato;
  margin-top: 30px;
`;

const TaskLists: (props: taskListsProps) => JSX.Element = (props: taskListsProps) => {
  const [tabStatus, setTabStatus] = useState(enumTaskStatus.Todo);
  const handleTabStatusOnClick: (tabType: enumTaskStatus) => void = (tabType: enumTaskStatus) => {
    setTabStatus(tabType);
  };

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
                actionBtn={
                  sortedTask.isContentOn ? (
                    <i className="fas fa-ellipsis-v fa-lg" />
                  ) : (
                    <i className="fas fa-ellipsis-h fa-lg" />
                  )
                }
                title={
                  <Title>
                    <div className="name">{sortedTask.name}</div>
                    <div className="tomatos">
                      {Array.from({ length: sortedTask.point }, (_v, i) => i).map((_tomato, index) => (
                        <div key={index} className="tomato" />
                      ))}
                    </div>
                  </Title>
                }
              />
              <Content isContentOn={sortedTask.isContentOn} tabStatus={tabStatus}>
                {tabStatus === enumTaskStatus.Todo && (
                  <FormGroup>
                    <FormBox title="TASK TITLE">
                      <input
                        name="name"
                        value={props.taskBuffer.name}
                        onChange={e => {
                          props.handleTaskBufferOnChange(e);
                        }}
                        type="text"
                        placeholder="Plz Enter your task ..."
                      />
                    </FormBox>
                    <FormBox title="ESTIMATED TOMOTO">
                      <TomatoEstimater
                        taskBuffer={props.taskBuffer}
                        handleTaskBufferOnChange={props.handleTaskBufferOnChange}
                      />
                    </FormBox>
                    <BtnGroup>
                      <Button
                        btnStyle={{
                          mainColor: "#7f7f7f",
                          width: "30%",
                        }}
                        btnText="Archive"
                        btnAction={e => {
                          props.handleArchiveTaskOnClick(e, props.taskBuffer.createdOn);
                        }}
                      />
                      <Button
                        btnStyle={{
                          mainColor: "#ea5548",
                          width: "50%",
                        }}
                        btnText="SAVE"
                        btnAction={e => {
                          props.handleUpdateTaskOnClick(e, props.taskBuffer.createdOn);
                        }}
                      />
                    </BtnGroup>
                  </FormGroup>
                )}
                {tabStatus === enumTaskStatus.Done && (
                  <BtnGroup>
                    <Button
                      btnStyle={{
                        mainColor: "#7f7f7f",
                        width: "30%",
                      }}
                      btnText="Archive"
                      btnAction={e => {
                        props.handleArchiveTaskOnClick(e, props.taskBuffer.createdOn);
                      }}
                    />
                    <Button
                      btnStyle={{
                        mainColor: "#ea5548",
                        width: "50%",
                      }}
                      btnText="Redo"
                      btnAction={e => {
                        props.handleArchiveTaskOnClick(e, props.taskBuffer.createdOn, true);
                      }}
                    />
                  </BtnGroup>
                )}
                {tabStatus === enumTaskStatus.Archieve && (
                  <BtnGroup>
                    <Button
                      btnStyle={{
                        mainColor: "#7f7f7f",
                        width: "100%",
                      }}
                      btnText="UnArchive"
                      btnAction={e => {
                        props.handleArchiveTaskOnClick(e, props.taskBuffer.createdOn, true);
                      }}
                    />
                  </BtnGroup>
                )}
              </Content>
            </Task>
          ))
      ) : (
        <NoDatas>No {enumTaskStatus[tabStatus]} Tasks</NoDatas>
      )}
    </Wrapper>
  );
};

export default TaskLists;
