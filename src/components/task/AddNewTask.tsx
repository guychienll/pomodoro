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
  return (
    <Wrapper>
      {props.children}
      <FormBox title="TASK TITLE">
        <input
          name="name"
          value={name}
          onChange={props.handleTaskBufferOnChange}
          type="text"
          placeholder="My Second Task"
        />
      </FormBox>
      <FormBox title="ESTIMATED TOMOTO">
        <TomatoEstimater
          handleTaskBufferOnChange={props.handleTaskBufferOnChange}
          taskBuffer={props.taskBuffer}
        />
      </FormBox>
      <Button btnAction={props.handleAddNewTaskOnClick} btnStyle={{}} btnText={`ADD TASK`} />
    </Wrapper>
  );
};

export default AddNewTask;
