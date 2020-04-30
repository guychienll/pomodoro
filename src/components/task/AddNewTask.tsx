import React from "react";
import styled from "styled-components";
import FormBox from "./FormBox";
import TomatoEstimater from "./TomatoEstimater";
import Button from "../shared/Button";
import { addNewTaskProps } from "../../typeAlias/addNewTaskProps";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AddNewTask: (props: addNewTaskProps) => JSX.Element =props => {
  const { name } = props.taskBuffer;
  const { handleAddNewTaskOnClick, handleTaskBufferOnChange, taskBuffer, children } = props;
  return (
    <Wrapper>
      {children}
      <FormBox title="TASK TITLE">
        <input
          name="name"
          value={name}
          onChange={handleTaskBufferOnChange}
          type="text"
          placeholder="Plz Enter your task ..."
        />
      </FormBox>
      <FormBox title="ESTIMATED TOMOTO">
        <TomatoEstimater
          handleTaskBufferOnChange={handleTaskBufferOnChange}
          taskBuffer={taskBuffer}
        />
      </FormBox>
      <Button
        btnAction={handleAddNewTaskOnClick}
        btnStyle={{ mainColor: "#ea5548", width: "80%" }}
        btnText={`ADD TASK`}
      />
    </Wrapper>
  );
};

export default AddNewTask;
