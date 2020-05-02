import React from "react";
import styled from "styled-components";
import Clock from "./Clock";
import { ITask } from "src/interface/ITask";
import Button from "../shared/Button";

type timerProps = {
  taskBuffer: ITask;
};

const Wrapper = styled.div`
  width: 600px;
  font-family: Lato;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #333333;
`;
const Header = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .name {
    font-size: 29px;
    font-weight: bold;
  }
`;

const Main = styled.div``;

const ButtonGroup = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TaskStatus = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 18px;
`;
const Footer = styled.div`
  font-weight: light;
  font-size: 14px;
`;
const Timer: (props: timerProps) => JSX.Element = (props: timerProps) => {
  return (
    <Wrapper>
      <Header>
        <div className="name">{props.taskBuffer.name}</div>
        {/* TODO: shold has a compoent to replace this points group */}
      </Header>
      <Main>
        <Clock></Clock>
        <ButtonGroup>
          <Button btnText={">"} btnAction={{}} btnStyle={{ mainColor: "#EA5548", width: "13%" }}></Button>
          <Button btnText={"="} btnAction={{}} btnStyle={{ mainColor: "#EA5548", width: "13%" }}></Button>
          <Button btnText={"@"} btnAction={{}} btnStyle={{ mainColor: "#EA5548", width: "13%" }}></Button>
        </ButtonGroup>
        <TaskStatus>TASK COMPLETE</TaskStatus>
      </Main>
      <Footer>PODOMORO</Footer>
    </Wrapper>
  );
};

export default Timer;
