import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Clock from "./Clock";
import { ITask } from "src/interface/ITask";
import Button from "../shared/Button";

type timerProps = {
  taskBuffer: ITask;
};

const Wrapper: any = styled.div`
  width: 600px;
  font-family: Lato;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #333333;
`;
const Header: any = styled.div`
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

const Main: any = styled.div``;

const ButtonGroup: any = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TaskStatus: any = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 18px;
`;
const Footer: any = styled.div`
  font-weight: light;
  font-size: 14px;
`;
const Timer: (props: timerProps) => JSX.Element = (props: timerProps) => {
  const [timeRemains, setTimeRemains] = useState(25 * 60);
  const [intervalId, setIntervalId] = useState(0);
  const timeRemainsRef: any = useRef(timeRemains);
  const isDuring: boolean = intervalId !== 0;
  timeRemainsRef.current = timeRemains;

  const handleTimerStartOnClick: () => void = () => {
    if (intervalId !== 0) {
      return;
    }
    const id: number = setInterval(() => {
      setTimeRemains(timeRemainsRef.current - 1);
    }, 1000);
    setIntervalId(id);
  };

  const handleTimerStopOnClick: () => void = () => {
    if (intervalId === 0) {
      return;
    }
    clearInterval(intervalId);
    setIntervalId(0);
  };

  const handleTimerRestartOnClick: () => void = () => {
    setTimeRemains(25 * 60);
    setIntervalId(0);
  };

  useEffect(() => {
    if (timeRemains <= 0) {
      clearInterval(intervalId);
    }
  }, [timeRemains, intervalId]);

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
        <Clock timeRemains={timeRemains}></Clock>
        <ButtonGroup>
          <Button
            btnAction={handleTimerStartOnClick}
            btnStyle={{ mainColor: isDuring ? "#888888" : "#EA5548", width: "50px" }}
            isDisabled={isDuring}
          >
            <i className="fas fa-play"></i>
          </Button>
          <Button
            btnAction={handleTimerStopOnClick}
            btnStyle={{ mainColor: isDuring ? "#EA5548" : "#888888", width: "50px" }}
            isDisabled={isDuring === false}
          >
            <i className="fas fa-stop"></i>
          </Button>
          <Button
            btnAction={handleTimerRestartOnClick}
            btnStyle={{ mainColor: isDuring ? "#888888" : "#EA5548", width: "50px" }}
            isDisabled={isDuring}
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
