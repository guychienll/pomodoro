import React from "react";
import styled from "styled-components";
import FormBox from "./FormBox";
import TomatoEstimater from "./TomatoEstimater";
import Button from "../shared/Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AddNewTask =props => {
  return (
    <Wrapper>
      {props.children}
      <FormBox title="TASK TITLE">
        <input type="text" placeholder="My Second Task" />
      </FormBox>
      <FormBox title="ESTIMATED TOMOTO">
        <TomatoEstimater />
      </FormBox>
      <Button btnStyle={{}} btnText={`ADD TASK`}></Button>
    </Wrapper>
  );
};

export default AddNewTask;
