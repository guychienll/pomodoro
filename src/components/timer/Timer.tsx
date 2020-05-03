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
  .tomatos {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .tomato,
    .unDoneTomato {
      border: 1px solid #ea5548;
      border-radius: 100%;
      width: 10px;
      height: 10px;
      margin-right: 5px;
    }
    .tomato {
      background-color: #ea5548;
    }
    .unDoneTomato {
      background-color: transparent;
    }
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
        <div className="tomatos">
          {Array.from({ length: props.taskBuffer.pointHasDone }, (_v, i) => i).map((_tomato, index) => (
            <div key={index} className="tomato" />
          ))}
          {Array.from({ length: props.taskBuffer.point - props.taskBuffer.pointHasDone }, (_v, i) => i).map(
            (_tomato, index) => (
              <div key={index} className="unDoneTomato" />
            )
          )}
        </div>
      </Header>
      <Main>
        <Clock></Clock>
        <ButtonGroup>
          <Button
            btnText=""
            btnAction={() => {
              console.log("start");
            }}
            btnStyle={{ mainColor: "#EA5548", width: "50px" }}
          >
            <i className="fas fa-play"></i>
          </Button>
          <Button
            btnText=""
            btnAction={() => {
              console.log("stop");
            }}
            btnStyle={{ mainColor: "#EA5548", width: "50px" }}
          >
            <i className="fas fa-stop"></i>
          </Button>
          <Button
            btnText=""
            btnAction={() => {
              console.log("reset");
            }}
            btnStyle={{ mainColor: "#EA5548", width: "50px" }}
          >
            <i className="fas fa-redo"></i>
          </Button>
        </ButtonGroup>
        <TaskStatus>TASK COMPLETE</TaskStatus>
      </Main>
      <Footer>PODOMORO</Footer>
    </Wrapper>
  );
};

export default Timer;
